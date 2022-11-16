import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  proceed: boolean = true;
  constructor(private dialogRef:MatDialogRef<ModalComponent>) { }

  ngOnInit(): void {
    this.proceed=true;
 
  }

 smsVerify(): void{
  this.proceed = false;
  console.log("sms");
  
}
emailVerify(): void{
  this.proceed = false;
  console.log("email");
}

}
