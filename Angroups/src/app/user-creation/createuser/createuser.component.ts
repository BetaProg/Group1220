import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Http, Response, Headers} from '@angular/http';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  angularForm = new FormGroup ({
    username: new FormControl(),
	useremail: new FormControl()
  });

  userUrl = "http://localhost:5555/users";
  usersObj:object = {};
  isSuccess = false;

	SaveUser(){
		this.usersObj = {
			"username": this.angularForm.value.username,
			"useremail": this.angularForm.value.useremail
		}
		this.http.post(this.userUrl, this.usersObj).subscribe((res: Response)=>{
			console.log(res);
			if(res.statusText == "Created"){
				this.isSuccess = true;
				this.angularForm.reset();
			}
		})
	}
  
  constructor(private http:Http) { }
  
  ngOnInit() {
  }

}
