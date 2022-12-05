import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   public product :any =[];
   public grandTotal ! :number;
  constructor(private cartService :CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
       .subscribe (res=>{
        this.product = res;
        this.grandTotal = this.cartService.getTotalPrice();
       })
    
  }
  removeItem(item:any){
  this.cartService.removeItem(item);
  }
  
   emptycart(){
    this.cartService.removeAll();
   }
}
