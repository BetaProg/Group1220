import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { FilterdataPipe } from '../filterdata.pipe';


@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {

  groupForm2 = new FormGroup ({
    groupName: new FormControl(),
    searchUsers: new FormControl(),
    query: new FormControl()
  });


  constructor(private http: Http) {}

  users = [];
  selected_users = [];
  SearchUser(){
    this.http.get("http://localhost:5555/users").subscribe((res:Response)=>{
      this.users = res.json();
      console.log(this.users);
    })
  }
  
  addToArray(event){
	if(event.target.checked==true){
		this.selected_users.push(event.target.value);
	}
	else{
		let indexToDelete = this.selected_users.indexOf(event.target.value);
		this.selected_users.splice(indexToDelete, 1);
	}
  }
  
  groupUrl = "http://localhost:5555/groups";
  groupObj = {};
  
  SaveGroup(){
	this.groupObj = {
		"groupname": this.groupForm2.value.groupName,
		"groupmembers": this.selected_users
	}
	this.http.post(this.groupUrl, this.groupObj).subscribe((res: Response)=>{
		console.log(res);
		if(res.statusText == "Created"){
			// this.isSuccess = true;
			this.groupForm2.reset();
		}
	});
  }

  ngOnInit() {
    this.SearchUser();
  }

}
