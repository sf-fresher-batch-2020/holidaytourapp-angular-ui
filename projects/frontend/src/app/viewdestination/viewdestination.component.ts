import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewdestination',
  templateUrl: './viewdestination.component.html',
  styleUrls: ['./viewdestination.component.css']
})
export class ViewdestinationComponent implements OnInit {
id: any;
data: any;
  constructor(private route: ActivatedRoute,private userservice: UserService) { }

  ngOnInit(){
    this.id=(this.route.snapshot.params['id']);
    this.getOne();
  }
  getOne(){
this.userservice.getOne(this.id).subscribe(data=>{
 
  this.data=data;
  
})
  }
}
