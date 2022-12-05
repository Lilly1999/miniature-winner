import { outputAst } from '@angular/compiler';
import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe:EventEmitter<any>=new EventEmitter();

 public totalproducts : number=0;
  constructor( private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
     this.totalproducts = res.length;
     console.log(this.totalproducts);
     
    })
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
    
  }
}
