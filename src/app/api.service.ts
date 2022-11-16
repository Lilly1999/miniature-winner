import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { } 

  signUp(user: User) {
    return this.http.post<User>("https://eassyshoppers.herokuapp.com/registration", user)


  }
  signIn(phone:string,password:string){
    return this.http.post("https://bumpy-shoes-listen-41-90-101-26.loca.lt/redis/login2",{phone:phone,password:password})
   
  }
  // otp(phone:string,OTP:string,otp:string){
  //   return this.http.get("https://eassyshoppers.herokuapp.com/sendOTP",{phone:phone,OTP:OTP,otp:otp})
  // }
}
