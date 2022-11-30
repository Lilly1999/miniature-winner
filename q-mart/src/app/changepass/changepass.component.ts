import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  ConfirmPasswordForm!: FormGroup;

  type: string = "password";
  hide = true;

  constructor() { }
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.ConfirmPasswordForm.controls['Password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  ngOnInit(): void {
    this.ConfirmPasswordForm = new FormGroup(
      {
        Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        ConfirmPassword: new FormControl('', [Validators.required,this.confirmationValidator]),
      }

    );
  }
  onConfirmPassword() {
    console.log(this.ConfirmPasswordForm.value);
  }
  onKey(e: Event) {
    console.log("ConfirmPasswordForm.controls");
    // console.log("ConfirmPasswordForm.get(controls");
    console.log("ConfirmPasswordForm.valid");
    console.log("ConfirmPasswordForm.value");
  }

}
