import { Component, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-cold-coffee',
  standalone: false,
  templateUrl: './cold-coffee.component.html',
  styleUrls: ['./cold-coffee.component.css']
})
export class ColdCoffeeComponent {
  @Output() cartUpdated = new EventEmitter<any[]>();
  
  selectedItem: any = null;
  selectedSize: string = 'وسط';
  quantity: number = 1;
  counter: number = 0;
  cartItems: any[] = [];

  products = [
    { name: "آيسد أمريكانو", price: 16.00, image: "/img/iced Amricano.jpg" },
    { name: "آيسد سجنتشر", price: 18.00, image: "/img/iced signature.jpg" },
    { name: "آيسد لاتيه", price: 16.00, image: "/img/iced signature.jpg" },
    { name: "آيسد بيستاشيو لاتيه", price: 22.00, image: "/img/iced latte pistachio.jpg" },
    { name: "آيسد سيريل لاتسه", price: 20.00, image: "/img/iced latte cereal.jpg" },
    { name: "آيسد ماتشا لاتيه", price: 20.00, image: "/img/iced matcha latte.jpg" },
    { name: "آيسد درب", price: 7.00, image: "/img/iced drip.jpg" },
    { name: "آيسد كركدية", price: 18.00, image: "/img/iced hibiscus.jpg" },
    { name: "آيسد تي خوخ", price: 18.00, image: "/img/iced tea peach.jpg" }
  ];

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  openDetails(product: any) {
    this.selectedItem = product;
    this.selectedSize = 'وسط'; // إعادة تعيين الحجم والكمية
    this.quantity = 1;

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
    if (this.quantity > 1) this.quantity--;
  }

  getSizePrice(basePrice: number): number {
    return this.selectedSize === 'صغير' ? basePrice - 4 : basePrice;
  }

  increment() {
    this.counter++;
  }

  addToCart(product: any, quantity: number) {
    const price = this.getSizePrice(product.price);
    const existingItem = this.cartItems.find(
      item => item.product.name === product.name && item.size === this.selectedSize
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.totalPrice = price * existingItem.quantity;
    } else {
      this.cartItems.push({ 
        product, 
        size: this.selectedSize, 
        quantity, 
        totalPrice: price * quantity 
      });
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

 



