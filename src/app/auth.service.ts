import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor() { }

  // signin():Observable<any>
  // return this.http.post<any>()
  // authUser(user:any){
  //   let UserArray=[];
  //   if (localStorage.getItem('Users')){
  //     UserArray=JSON.parse(localStorage.getItem('Users'));
  //   }
  //   return UserArray.find(p => p.PhoneNo ===user.PhoneNo && p.password===user.password)
  // }
}
