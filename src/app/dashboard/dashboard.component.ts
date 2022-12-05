import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  product:any;
  constructor(private cartService:CartService) { }

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
      title:'Handbag',
      image:"../assets/handbag.jpeg",
      description:"black leather handbag"
    },

    {
      price:1340,
      title:'Shea Mosturizer',
      image:"../assets/shea butter.jpeg",
      description:"SheaMosturizer Lavender & wild orchid bath,body & massage oil 8oz"
    },

    {
      price:5000,
      title:'Sneakers',
      image:"../assets/sneakers.jpeg",
      description:"grey sports shoes"
    },
    {
      price:2000,
      title:'Cooking oil',
      image:"../assets/oil.jpg",
      description:"5 litres golden fry cooking oil"
    },
    {
      price:700,
      title:'heels',
      image:"../assets/heels.jpg",
      description:"women golden stilleto heels"
    },
    {
      price:1500,
      title:'hood',
      image:"../assets/hood.jpg",
      description:"grey hoody"
    },
    {
    price:800,
    title:'Lotion',
    image:"../assets/lotion.jpg",
    description:"Nivea for men body lotion"
  }
    
  ]
  imageurl:string = "../assets/handbag.jpeg";
  gridColumns=3;

  AddToCart(product: any){
    this.cartService.AddToCart(product);
    console.log(product);
    window.alert('Your product has been added to cart!');
    
  }
}




