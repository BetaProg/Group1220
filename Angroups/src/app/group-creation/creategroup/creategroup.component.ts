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

  angularForm = new FormGroup ({
    groupName: new FormControl(),
    searchUsers: new FormControl()
  });


  constructor(private http: Http) { }

  users = [];
  SearchUsers(){
    this.http.get("http://localhost:5555/users").subscribe((res:Response)=>{
      this.users = res.json();
      console.log(this.users);
    })
  }
  
  listofstudent = [
    {id:"1", name:"icha",age:"20"},
    {id:"2", name:"denok",age:"23"},
    {id:"3", name:"sri utami",age:"10"},
    {id:"4", name:"mbok darmi",age:"40"},
    {id:"5", name:"jeniffer",age:"30"},
    {id:"6", name:"limbuk",age:"22"}
	];

  // users.forEach((key, value) => {
  //   if(key['username']=="srinivas"){
  //   console.log(key['username']);
  //   }
  // });

  ngOnInit() {
    this.SearchUsers();
  }

}
