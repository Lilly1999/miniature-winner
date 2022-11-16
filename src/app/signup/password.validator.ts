import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordMatchValidator:ValidatorFn=(control: AbstractControl): ValidationErrors | null=>{
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.pristine || confirmPassword?.pristine ){
      return null;
    }

    if(password?.value === confirmPassword?.value || confirmPassword?.pristine){
      return null;

    } else {
      return { 'passwordMismatch':true};
    }
    // return password && confirmPassword && !password.value === confirmPassword.value ? { 'misMatch': true } : null;
  };
    