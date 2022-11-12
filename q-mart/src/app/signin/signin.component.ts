import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  SignInForm!: FormGroup;
  // public hide:boolean =false;

  type: string = "password";
  hide = true;
  constructor( private apiService:ApiService,
    private router:Router) { }

  ngOnInit() {
    this.SignInForm = new FormGroup(
      {
        PhoneNo: new FormControl('', [Validators.required, Validators.pattern(/^(?:254|\+254|0)?((?:(?:7(?:(?:[01249][0-9])|(?:5[789])|(?:6[89])))|(?:1(?:[1][0-5])))[0-9]{6})$/)]),
        Password: new FormControl('', [Validators.required])
      }
    );
  }

  // hideShowPass(e: Event) {
  //   this.hide = !this.hide;
  //   this.hide ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  //   this.hide ? this.type = "text" : this.type = "password";

  // }

  onSignIn() {
    // console.log(this.SignInForm.value);
    // console.log(this.SignInForm.controls['PhoneNo'].value)

    this.apiService.signIn(this.SignInForm.controls['PhoneNo'].value, this.SignInForm.controls['Password'].value)
    .subscribe(res => {
      console.log(res);
      
      alert("You have logged in successfully");
      this.SignInForm.reset();
      this.router.navigate(['/dashboard']);
     },
     err => {
      alert("User already exists")
     })
  }

  onKey(e: Event) {
    console.log(this.SignInForm.controls)
    console.log(this.SignInForm.value)
    console.log(this.SignInForm.valid)
  }


}
