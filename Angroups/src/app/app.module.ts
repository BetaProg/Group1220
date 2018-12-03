import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  // { path: 'users', loadChildren: './user-creation/user-creation.module#UserCreationModule' },
  { path: 'users', loadChildren: './user-creation/user-creation.module#UserCreationModule' },
  { path: 'groups', loadChildren: './group-creation/group-creation.module#GroupCreationModule' }
  // { path: 'userlist', loadChildren: './user-creation/user-creation.module#UserCreationModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
	HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
