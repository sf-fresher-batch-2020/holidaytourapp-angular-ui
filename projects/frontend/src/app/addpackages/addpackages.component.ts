import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { addpackages } from 'addpackages.model';
import { update } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addpackages',
  templateUrl: './addpackages.component.html',
  styleUrls: ['./addpackages.component.css']
})
export class AddpackagesComponent implements OnInit {
   packages: any=[];
  id: number;
  Duration: number;
  Ratings:number;
  Price:number;
  Facilities: Text;
  data: any;
  
  constructor(private router: Router,private userservice: UserService,private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getOne();

    this.userservice.getpackages().subscribe((result)=>{
      console.log("result",result);
      this.packages=result,
      localStorage.setItem("PACKAGE DETAILS",JSON.stringify(this.packages));
    })
  }
  addpack(form:NgForm){
    let bookdata={id:this.id,Duration:this.Duration,Ratings:this.Ratings,Price:this.Price,Facilities:this.Facilities};
    console.log(JSON.stringify(bookdata));
 
    this.userservice.addpackage(bookdata).subscribe(res=>{
      console.log(res);
      this.toastr.success("ADDED");
      window.location.reload();
      form.reset();
      
    })
    this.getOne();
 }
  delete(j)
  {
    console.log(j);
    this.userservice.deletepackage(j).subscribe(res=>{
      window.location.reload();
      this.getOne();
    })
    
  }

  edit(e)
  {
    console.log(e); 
    let bookdata={id:this.id,Duration:this.Duration,Ratings:this.Ratings,Price:this.Price,Facilities:this.Facilities};
    this.id=e.id;
    this.Duration=e.Duration;
    this.Ratings=e.Ratings;
    this.Price=e.Price;
    this.Facilities=e.Facilities;
    this.userservice.updatepackage(e).subscribe(res=>{
      console.log("updating");
      })
      this.userservice.addpackage(bookdata).subscribe(res=>{
        console.log("updated");
      })
    
            this.getOne();
  }


  getOne(){
    this.userservice.getOne(this.id).subscribe(data=>{
     
      this.data=data;
      
    })
      }
    }
