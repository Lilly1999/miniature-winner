import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {


  constructor() { }

  RecoverForm!: FormGroup;
  ngOnInit(): void {
    this.RecoverForm =new FormGroup(
      {
        PhoneNo:new FormControl('',Validators.pattern (/^(?:254|\+254|0)?((?:(?:7(?:(?:[01249][0-9])|(?:5[789])|(?:6[89])))|(?:1(?:[1][0-5])))[0-9]{6})$/))
      }
    );
  }
 onKey(e:Event){
    console.log();
    
 }
}
