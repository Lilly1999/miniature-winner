import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { PaymentmodalComponent } from './paymentmodal/paymentmodal.component';
import { RecoverComponent } from './recover/recover.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  { path: '', redirectTo:'/signin', pathMatch:'full' },
  { path: 'signin', component:SigninComponent },
  { path: 'signup', component:SignupComponent },     
  { path: 'forgotpassword', component:ForgotpasswordComponent },
  { path: 'dashboard', component:DashboardComponent },  
  { path: 'home', component:HomeComponent },
  { path: 'modal', component:ModalComponent},
  { path:'recover', component:RecoverComponent},
  { path:'verification', component:VerificationComponent},
  { path:'changepass', component:ChangepassComponent},
  { path:'cart',component:CartComponent},
  { path:'paymentmethod',component:PaymentmethodComponent},
  {path: 'paymentmodal',component:PaymentmodalComponent},
  { path: '**', component:NotfoundComponent },  
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
