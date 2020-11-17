import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isLoggedInUser;
  constructor() { }

  ngOnInit(): void {
    this.isLoggedInUser =  localStorage.getItem("LOGGED_IN_USER") != null ? true: false;
  }

}
