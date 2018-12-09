import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserslistComponent } from './userslist/userslist.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  { path: '', component: UserslistComponent, pathMatch: 'full' },
  { path: 'userlist', component: UserslistComponent },
  { path: 'adduser', component: CreateuserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
	HttpModule
  ],
  declarations: [CreateuserComponent, UserslistComponent]
})
export class UserCreationModule { }
