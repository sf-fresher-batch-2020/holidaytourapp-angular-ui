import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  
  data: any;
  bookings: any;
  today=new Date();
  loggedInUser;
  constructor(
    private route: ActivatedRoute,private userservice: UserService) {this.route.params.subscribe(params =>{
    
  }) }

  ngOnInit(): void{
  
    this.loggedInUser= JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
   this.loadPack();
  }
  loadPack(){
    this.userservice.getAllBookings().subscribe(data =>{
      console.log(data);
      this.bookings=data;
      
      if (this.loggedInUser.role =="ADMIN"){
        this.bookings = data;
      }
      else{
        let myBookings = this.bookings.filter(obj=>obj.user_id == this.loggedInUser.id);
        this.bookings=myBookings;
      }
      
    })
  }

  cancel(booking){
    console.log("id", booking);
    booking.status="CANCELLED";
    this.userservice.updateStatus(booking).subscribe(res=>{
      this.loadPack();
    })
  }
  isDisabled(): boolean {
    if (this.loggedInUser.role == 'ADMIN') {
      return true;
    } else {
      return false;
    }
 }
}
