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
  tickets: any;
  
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
 getpackages(){
  return this.http.get(this.apiUrl+"/packages");  
 }
 getpack(id:number){
  let url= this.apiUrl+"/packages/"+id;
   return this.http.get(url);
 }
 book(book){
  let url= this.apiUrl + "/bookings";
  return this.http.post(url,book);
}

getAllBookings(){
  let url= this.apiUrl + "/bookings";
  return this.http.get(url);
}

updateStatus(booking){
  let url = this.apiUrl + "/bookings/"+booking.id;
  return this.http.put(url,booking);
}
}
