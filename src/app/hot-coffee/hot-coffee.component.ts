import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-hot-coffee',
  standalone: false,
  templateUrl: './hot-coffee.component.html',
  styleUrls: ['./hot-coffee.component.css']
})
export class HotCoffeeComponent {
  @Output() cartUpdated = new EventEmitter<any[]>();
  selectedItem: any = null;
  counter: number = 0;
  quantity: number = 1;
  selectedSize: string = 'وسط';
  cartItems: any[] = [];

  products = [
    { name: "كابتشينو", price: 13.00, image: "/img/cappucino.jpg" },
    { name: "لاتيه", price: 13.00, image: "/img/latte.jpg" },
    { name: "هوت تشوكلت", price: 19.00, image: "/img/hot chocolate.jpg" },
    { name: "فلات وايت", price: 10.00, image: "/img/flat white.jpg" },
    { name: "قهوة مقطرة", price: 7.00, image: "/img/Drip.jpg" },
  ];

  constructor(private router: Router) {}

  openDetails(product: any) {
    this.selectedItem = product;
    let modal = new bootstrap.Modal(document.getElementById('detailsModal')!);
    modal.show();
  }

  selectSize(size: string) {
    this.selectedSize = size;
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
    const priceAdjustment = this.selectedSize === 'صغير' ? -4 : 0;
    const finalPrice = product.price + priceAdjustment;

    const existingItem = this.cartItems.find(item => item.product.name === product.name && item.size === this.selectedSize);
    
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.totalPrice = existingItem.product.price * existingItem.quantity;
    } else {
      this.cartItems.push({ product, quantity, size: this.selectedSize, totalPrice: finalPrice * quantity });
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

