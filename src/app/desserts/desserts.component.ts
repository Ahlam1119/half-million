import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-desserts',
  standalone: false,
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.css'
})
export class DessertsComponent {
  @Output() cartUpdated = new EventEmitter<any[]>();
  selectedItem: any = null;
  counter: number = 0;
  quantity: number = 1;
  cartItems: any[] = [];

  products = [
    { name: "كراميل بايتس", price: 12.00, image: "/img/carmel bites.jpg" },
    { name: "شوكلت بايتس", price: 14.00, image: "/img/chocolate Bites.jpg" },
    { name: "براونيز", price: 12.00, image: "/img/brawnies.jpg" },
    { name: "كوكيز", price: 10.00, image: "/img/cookies.jpg" },
  ];

  constructor(private router: Router) {}

  openDetails(product: any) {
    this.selectedItem = product;
    this.quantity = 1;
    let modal = new bootstrap.Modal(document.getElementById('detailsModal')!);
    modal.show();
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increment() {
    this.counter += 1;
  }

  addToCart(product: any, quantity: number) {
    const existingItem = this.cartItems.find(item => item.product.name === product.name);

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.totalPrice = existingItem.product.price * existingItem.quantity;
    } else {
      this.cartItems.push({ product, quantity, totalPrice: product.price * quantity });
    }

    this.counter = this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    this.cartUpdated.emit(this.cartItems);

    Swal.fire({
      title: 'تمت الإضافة!',
      text: 'تمت إضافة المنتج إلى السلة.',
      icon: 'success',
      timer: 1000,
      showConfirmButton: false
    });
  }
}


