import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-water',
  standalone: false,
  templateUrl: './water.component.html',
  styleUrl: './water.component.css'
})
export class WaterComponent {
  @Output() cartUpdated = new EventEmitter<any[]>();
  selectedItem: any = null;
  counter: number = 0;
  quantity: number = 1;
  cartItems: any[] = [];

  products = [
    { name: "مياه بيرين", price: 5.00, image: "/img/water.jpg" },
    { name: " مياه بيرين غازية", price: 12.00, image: "/img/sparkling water.jpg" },
    { name: "عصير برتقال", price: 14.00, image: "/img/orange juics.jpg" },
    { name: "عصير الرمان بالبرتقال", price: 14.00, image: "/img/pomegrante orange juice.jpg" },
  ];
  constructor(private router: Router) {}
  openDetails(product: any) {
    this.selectedItem = product;
    this.quantity = 1;
    let modal = new bootstrap.Modal(document.getElementById('detailsModal')!);
    modal.show();
  }

  increment() {
    this.counter += 1;
  }
  increaseQuantity() {
    this.quantity++;
  }
  
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
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
      text: `تمت إضافة المنتج إلى السلة.`,
      icon: 'success',
      timer: 1000,
      showConfirmButton: false
    });
  } 
}

