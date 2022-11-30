import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 public CartListProduct:any=[]
 public ListProduct =new BehaviorSubject<any>([]);
  constructor() { }
  
  getProducts(){
    return this.ListProduct.asObservable();
  }
  setProduct(product :any){
    //push product item
    this.CartListProduct.push(...product);
    //emit data
    this.ListProduct.next(this.CartListProduct);
  }
  AddToCart(product:any){
   this.CartListProduct.push(product);
   this.ListProduct.next(this.CartListProduct);
   this.getTotalPrice();
   console.log(this.CartListProduct);
   
  }
  getTotalPrice() : number{
    let grandTotal= 0;
    this.CartListProduct.map((a:any) =>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeItem(product:any){
    this.CartListProduct.map((a:any,index:any)=>{
       if(product.id=== a.id){
        this.CartListProduct.splice(index,1);
       }
    })
    this.ListProduct.next(this.CartListProduct);

  }
  removeAll(){
    this.CartListProduct=[]
    this.ListProduct.next(this.CartListProduct);
  }
}
