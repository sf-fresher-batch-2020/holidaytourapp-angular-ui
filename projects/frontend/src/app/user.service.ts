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
 getpackages(){
  return this.http.get<any>(this.apiUrl+"/packages");  
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
addpackage(pack){
  let url= this.apiUrl + "/packages";
  return this.http.post(url,pack);
}
deletepackage(id)
{
  let url= this.apiUrl + "/packages/"+id;
  return this.http.delete(url);
}
updatepackage(pack)
{
  let url= this.apiUrl + "/packages/"+pack.id;
  return this.http.delete(url,pack); 
}
}
