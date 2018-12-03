import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})

export class UserslistComponent implements OnInit {

	userUrl = "http://localhost:5555/users";
	addUserUrl = "users/adduser";
	constructor(private http: Http, private router: Router) { }
  
	users = [];
	fetchUsers(){
		this.http.get(this.userUrl).subscribe(
			(res: Response)=>{
				this.users = res.json();
				console.log(this.users);
			}
		)
	}
  
	ngOnInit() {
		this.fetchUsers();
		if(this.router.url == "users"){
			this.addUserUrl = "users/adduser";
		}
		else if(this.router.url == "/users/userlist"){
			console.log(this.router.url);
			this.addUserUrl = "../adduser";
		}
		else{
			console.log(this.router.url);
			this.addUserUrl = "adduser";
		}
	}

}
