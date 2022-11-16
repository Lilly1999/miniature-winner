import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigningUpService {
Userregistration:any;

  constructor(private httpClient:HttpClient) { }
}
