import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { passwordMatchValidator } from './password.validator';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignUpForm!: FormGroup;
  type :string= "password";
  hide = true;

  


  constructor(public dialog:MatDialog,
    private apiService:ApiService,
    private router:Router) {}

  // confirmationValidator = (control: FormControl): 
  // {
  //    [s: string]: boolean } => {
  //   if (!control.value) {
  //     return { required: true };
  //   } else if (control.value !== this.SignUpForm.controls['password'].value) {
  //     return { confirm: true, error: true };
  //   }
  //   return {};
  // };
  // MustMatch (controlName: string, checkControlName: string):Validators {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.get(controlName);
  //     const checkControl = formGroup.get(checkControlName);

  //     if (checkControl?.errors && !checkControl.errors['MustMatch']) {
  //       return null;
  //     }

  //     if (control?.value !== checkControl?.value) {
  //       formGroup.get(checkControlName)?.setErrors({ MustMatch:true });
  //       return { MustMatch: true };
  //     } else {
  //       return null;
  //     }
  //   };
  // }
//  MustMatch(ControlName:string,matchingControlName:string){ 
//           return (formGroup:FormGroup) =>{
//             const control = formGroup.controls [ControlName];
//             const matchingControl =formGroup.controls [matchingControlName];
//             if (matchingControl.errors && !matchingControl.errors['MustMatch'])
//             {
//               return

//             }
//             if (control.value !==matchingControl.value){
//               matchingControl.setErrors(['MustMatch',true] )
//             }
//             else{
//               matchingControl.setErrors (null);
//             }
                 
        
//           }
//     }
  ngOnInit(){
    this.SignUpForm=new FormGroup(
      {
      username:new FormControl( '',Validators.required),
      phone: new FormControl ('',[Validators.required,Validators.pattern(/^(?:254|\+254|0)?((?:(?:7(?:(?:[01249][0-9])|(?:5[789])|(?:6[89])))|(?:1(?:[1][0-5])))[0-9]{6})$/)]),
      email: new FormControl ('',[Validators.required,Validators.email]),
      password: new FormControl ('',[Validators.required,Validators.minLength (8)]),
      confirmPassword: new FormControl ('',[Validators.required])
      },

      { validators:passwordMatchValidator }
      );
      
    }
      
  
    
    // hideShowPass(e:Event){
    //   this.hide=!this.hide;
    //   this.hide ? this.eyeIcon ="fa-eye":this.eyeIcon ="fa-eye-slash";
    //   this.hide ? this.type ="text":this.type ="password";
    // }
     
 
  // onSignUp(){
  //   if(this.SignUpForm.valid){
  //     console.log(this.SignUpForm.value);
  //   }
  //   else{
      
  //   }
   
  // }
  openDialog(){
    this.dialog.open(ModalComponent);
  }

// onKey(e:Event){
//   console.log(this.SignUpForm.controls)
//   console.log(this.SignUpForm.value)
//   //console.log(this.SignUpForm.get('PhoneNo')?.valid)
//   console.log(this.SignUpForm.valid)
// }

  signUp(){
  this.apiService.signUp(this.SignUpForm.value)
  .subscribe(res => {
    this.openDialog();
    alert("Registration was successfull proceed to verify your account");
    console.log(res);
    
    this.SignUpForm.reset();
    
    // this.router.navigate(['/signin']);
   },
   err => {
    alert("User already exists")
    
   }
   )
    }
  }
  




