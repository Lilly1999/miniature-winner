import { Component, OnInit } from '@angular/core';
import { ShowHideStyleBuilder } from '@angular/flex-layout';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  productOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    navSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  productArray=
  [
    {
      price:700,
      name:'Handbag',
      imageUrl:"../assets/handbag.jpeg",
    },
    {
      price:5000,
      name:'Sneakers',
      imageUrl:"../assets/sneakers.jpeg",
    },
    {
      price:25000,
      name:'Laptop',
      imageUrl:"../assets/laptop.jpg",
    },
    {
      price:700,
      name:'heels',
      imageUrl:"../assets/heels.jpg",
    },
    {
      price:1500,
      name:'hood',
      imageUrl:"../assets/hood.jpg",
    }
    
  ]
  imageurl:string = "../assets/handbag.jpeg";
  gridColumns=3;
}




