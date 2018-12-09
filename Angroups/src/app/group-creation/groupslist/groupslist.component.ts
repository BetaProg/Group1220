import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groupslist',
  templateUrl: './groupslist.component.html',
  styleUrls: ['./groupslist.component.css']
})
export class GroupslistComponent implements OnInit {

  constructor(private router: Router) { }
  
  groupUrl = "http://localhost:5555/users";
	addGroupUrl = "users/adduser";

  ngOnInit() {
    if(this.router.url == "groups"){
			this.addGroupUrl = "users/addgroup";
		}
		else if(this.router.url == "/groups/groupslist"){
			console.log(this.router.url);
			this.addGroupUrl = "../addgroup";
		}
		else{
			console.log(this.router.url);
			this.addGroupUrl = "addgroup";
		}
  }

}
