import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule }  from '@angular/material/icon';
import {MatDividerModule } from '@angular/material/divider';
import {MatListModule } from '@angular/material/list';
import { SigninComponent } from './signin/signin.component';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SignupComponent } from './signup/signup.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecoverComponent } from './recover/recover.component';
import { VerificationComponent } from './verification/verification.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule } from '@angular/material/select';
import {MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import {MatBadgeModule} from '@angular/material/badge';
import { CartComponent } from './cart/cart.component';
import {MatTableModule } from '@angular/material/table';
import { LayoutModule } from '@angular/cdk/layout';
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { MatRadioModule } from '@angular/material/radio';
import { ProductsComponent } from './products/products.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    ForgotpasswordComponent,
    NotfoundComponent,
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ModalComponent,
    RecoverComponent,
    VerificationComponent,
    ChangepassComponent,
    CartComponent,
    PaymentmethodComponent,
    ProductsComponent,
    

    
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    CarouselModule,
    MatDialogModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule,
    MatBadgeModule,
    MatTableModule,
    LayoutModule,
    NgDynamicBreadcrumbModule,
    MatRadioModule,
    MatTooltipModule,
    MatSnackBarModule
   ],
    providers: [ ApiService,
      {
        provide: MatDialogRef,
        useValue: {}
      }
   ],
  bootstrap: [AppComponent]
})
export class AppModule {}
