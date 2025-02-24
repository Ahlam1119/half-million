import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = [
    { name: "المشروبات الباردة", link: "/cold-coffee", image: "/img/coldcoffe.jpg" },
    { name: "المشروبات الساخنة", link: "/hot-coffee", image: "/img/latte.jpg" },
    { name: "حلى", link: "/desserts", image: "/img/brawnies.jpg" },
    { name: "ساندويتشات", link: "/sandwiches", image: "/img/tuna.jpg" },
    { name: "آيس كريم", link: "/ice-cream", image: "/img/icecream.jpg" },
    { name: "عصائر ومياه", link: "/water", image: "/img/water and jucie.jpg" }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

