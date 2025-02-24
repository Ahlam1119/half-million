import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  @Input() cartItems: any[] = [];
  get setcounter() {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  cartOpen = false;
  toggleCart() {
    this.cartOpen = !this.cartOpen;
  }

  // دالة لإتمام الشراء
  checkout() {
    // منطق إتمام الشراء
  }

  // دالة لحساب إجمالي السعر لكل المنتجات في السلة
  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }

  // إضافة منتج إلى السلة
  addToCart(product: any, quantity: number, size: string) {
    const item = this.cartItems.find(item => item.product === product && item.size === size);
    
    if (item) {
      item.quantity += quantity;  // تحديث الكمية إذا كان المنتج موجودًا في السلة
    } else {
      this.cartItems.push({
        product: product,
        quantity: quantity,
        size: size,
        price: product.price,  // أو السعر المعدل حسب الحجم
      });
    }
  }

  increaseCartQuantity(item: any, index: number): void {
    const cartItem = this.cartItems[index];
    if (cartItem && cartItem.product.id === item.product.id && cartItem.size === item.size) {
      cartItem.quantity++;
      cartItem.totalPrice = cartItem.quantity * cartItem.product.price;
    }
  }
  
  decreaseCartQuantity(item: any, index: number): void {
    const cartItem = this.cartItems[index];
    if (cartItem && cartItem.product.id === item.product.id && cartItem.size === item.size) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        cartItem.totalPrice = cartItem.quantity * cartItem.product.price;
      } else {
        this.cartItems.splice(index, 1); // حذف المنتج إذا وصل للصفر
      }

    }
  }
  
goToThankYouPage() {
  // هنا يتم تحويل المستخدم إلى صفحة الشكر بعد إتمام الشراء
  this.router.navigate(['/thank-you']);
}
  

  
  

}
