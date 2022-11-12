import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  proceed: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.proceed=true;
 
  }

 smsVerify(): void{
  this.proceed = false;
  console.log("smz");
  
}
emailVerify(): void{
  this.proceed = false;
  console.log("email");
}

}
