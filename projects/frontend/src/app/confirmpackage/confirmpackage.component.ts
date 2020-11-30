import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-confirmpackage',
  templateUrl: './confirmpackage.component.html',
  styleUrls: ['./confirmpackage.component.css']
})
export class ConfirmpackageComponent implements OnInit {
  id: number;
  data: any;
  package: any;
  username: string;
  email: string;
  Startdate: any;
  enddate:any;
  userdata: any;
  today: any;
  loggedInUser: any;

  constructor(
    private route: ActivatedRoute,private userservice: UserService,private toastr:ToastrService, private router: Router) {this.route.params.subscribe(params =>{
    this.id= +params["id"];
  }) }

  ngOnInit(): void{
    this.loggedInUser = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
 this.email = this.loggedInUser.email;
     this.username = this.loggedInUser.name;
     this.Startdate = new Date().toJSON().substr(0,10);

   this.loadPack();
  }
  loadPack(){
    this.userservice.getpack(this.id).subscribe(data =>{
    
      this.package=data;
      
    })
  }
  book(){
    
    let enddate = new Date(this.Startdate);
            enddate.setDate(enddate.getDate() + (this.package.Duration*7));
            this.enddate = enddate.toJSON().substr(0,10);
            
            var today = new Date().toJSON();
                
    let bookdata={username:this.username,email:this.email,Startdate:this.Startdate,enddate:this.enddate,package:this.package,status:"BOOKED",createdBy:this.loggedInUser.id,createdDate: today};
    
    
    this.userservice.book(bookdata).subscribe(res =>{
      
      this.toastr.success("Booking Confirmed");
      this.router.navigate(["bookings"]);
    })

    
  };
  
  imagepath: string="assets/images/login.jpeg";
}
