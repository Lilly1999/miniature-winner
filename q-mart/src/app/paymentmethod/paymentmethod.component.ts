import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.component.html',
  styleUrls: ['./paymentmethod.component.css']
})
export class PaymentmethodComponent implements OnInit {
  paymentmethod!: string;
  paymentmethods: string[] = [
    'Mobile Money',
    'MasterCard',
    'Visa', 
    'Paypal'];

  constructor() { }

  ngOnInit(): void {
  }

}
