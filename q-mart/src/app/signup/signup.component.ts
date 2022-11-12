import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';



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
      Username:new FormControl( '',Validators.required),
      PhoneNo: new FormControl ('',[Validators.required,Validators.pattern(/^(?:254|\+254|0)?((?:(?:7(?:(?:[01249][0-9])|(?:5[789])|(?:6[89])))|(?:1(?:[1][0-5])))[0-9]{6})$/)]),
      Email: new FormControl ('',[Validators.required,Validators.email]),
      Password: new FormControl ('',[Validators.required,Validators.minLength (8)]),
      ConfirmPassword: new FormControl ('',[Validators.required])
      },

      { validators: passwordMatchValidator }
      );
      
    }
      
  
    
    // hideShowPass(e:Event){
    //   this.hide=!this.hide;
    //   this.hide ? this.eyeIcon ="fa-eye":this.eyeIcon ="fa-eye-slash";
    //   this.hide ? this.type ="text":this.type ="password";
    // }
     
 
  onSignUp(){
    if(this.SignUpForm.valid){
      console.log(this.SignUpForm.value);
    }
    else{
      
    }
   
  }
  openDialog(){
    this.dialog.open(ModalComponent);
  }

onKey(e:Event){
  console.log(this.SignUpForm.controls)
  console.log(this.SignUpForm.value)
  //console.log(this.SignUpForm.get('PhoneNo')?.valid)
  console.log(this.SignUpForm.valid)
}
 
  // MatchValidator(e: Event):null | ValidationErrors {
  //   let pass =this.SignUpForm.controls['Password'].value;
  //   let confirm =this.SignUpForm.controls['ConfirmPassword'].value;
    
  //   if (!pass || !confirm ){
  //     return  null;
  //   }
  //   if (confirm.length > 0 && pass !== confirm){
  //     this.SignUpForm.controls['Password'].setErrors({ mismatch:true })
  //     return { mismatch:true }
  //   }

  //    return null;
  // }
  //  match(e:Event){
  //   console.log(this.SignUpForm.controls);
    
  // //  }

  sign(){
  this.apiService.signUp(this.SignUpForm.value)
  .subscribe(res => {
    alert("Your account has been created successfully");
    this.SignUpForm.reset();
    this.router.navigate(['/signin']);
   },
   err => {
    alert("User already exists")
   })
    }
  }
  
  export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const Password = control.get('Password');
    const ConfirmPassword = control.get('ConfirmPassword');
    if (Password?.pristine || ConfirmPassword?.pristine ){
      return null;
    }

    if(Password?.value === ConfirmPassword?.value || ConfirmPassword?.pristine){
      return null;

    } else {
      return { 'passwordMismatch':true};
    }
  
    // return Password && ConfirmPassword && !Password.value === ConfirmPassword.value ? { 'passwordMismatch': true } : null;
  };
    



