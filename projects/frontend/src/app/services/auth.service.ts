import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl:string;
  constructor(private http: HttpClient) { 
    this.apiUrl =  environment.API_URL;
  }
  storeLoginDetails(user) {
    localStorage.setItem('LOGGED_IN_USER', JSON.stringify(user));
  }
  getdestinations(){
    return this.http.get(this.apiUrl+"/destination");
  }
}
