import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewdestination',
  templateUrl: './viewdestination.component.html',
  styleUrls: ['./viewdestination.component.css']
})
export class ViewdestinationComponent implements OnInit {
id: any;
data: any;
packages: any=[];
  constructor(private route: ActivatedRoute,private userservice: UserService,private http:HttpClient) { }

  ngOnInit(){
    this.id=(this.route.snapshot.params['id']);
    this.getOne();

    this.userservice.getpackages().subscribe((result)=>{
      console.log("result",result);
      this.packages=result,
      localStorage.setItem("PACKAGE DETAILS",JSON.stringify(this.packages));
    })

  }
  getOne(){
this.userservice.getOne(this.id).subscribe(data=>{
 
  this.data=data;
  
})
  }
}
