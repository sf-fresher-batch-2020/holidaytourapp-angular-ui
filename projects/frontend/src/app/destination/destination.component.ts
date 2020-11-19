import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { result } from 'lodash';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  
  data: any=[];
  constructor(private http: HttpClient,private authservice: AuthService) { }

  ngOnInit() {
    this.authservice.getdestinations().subscribe((result)=>{
      console.log("result",result);
      this.data=result
    })
  }
imagepath: string="assets/images/img_bg_2.jpg";
}
