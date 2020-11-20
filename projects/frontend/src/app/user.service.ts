import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string;

  constructor(private http:HttpClient ) {
    this.apiUrl = environment.API_URL;
   }
  users;
 register (user){
   let url= this.apiUrl + "/users";
   return this.http.post(url,user);
 }

 getUsers(){
return this.http.get<any>(this.apiUrl+"/users");  
 }
 getOne(id){
  return this.http.get<any>(this.apiUrl+"/viewdestination/"+id);
 }
}
