import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-groupslist',
  templateUrl: './groupslist.component.html',
  styleUrls: ['./groupslist.component.css']
})

export class GroupslistComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private http: Http, private renderer: Renderer2) { }
  
	groupUrl = "http://localhost:5555/groups";
	addGroupUrl = "groups/addgroup";
	
	groups = [];
	fetchGroups(){
		this.http.get(this.groupUrl).subscribe(
			(res:Response)=>{
				this.groups = res.json();
				console.log(this.groups);
			}
		)
	}

	ngOnInit() {
		this.fetchGroups();
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
  
	@ViewChild('xyz')
	private xyz: ElementRef;
	
	ngAfterViewInit() {
		console.log("AppComponent:AfterViewInit");
		// this.renderer.listen(this.xyz.nativeElement, 'click', ()=>{
			// this.renderer.setStyle(this.xyz.nativeElement, 'color', 'red');
		// })
	}
	
	showGroupDetails(group){
		console.log(group);
	}

}
