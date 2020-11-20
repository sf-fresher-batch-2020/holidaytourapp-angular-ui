import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private route: ActivatedRoute,private userservice: UserService) {this.route.params.subscribe(params =>{
    this.id= +params["id"];
  }) }

  ngOnInit(): void{
  
   this.loadPack();
  }
  loadPack(){
    this.userservice.getpack(this.id).subscribe(data =>{
      console.log(data);
      this.package=data;
      localStorage.setItem("CONFIRMPACKAGES",JSON.stringify(this.package));
    })
  }
}
