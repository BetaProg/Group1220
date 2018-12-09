import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { GroupslistComponent } from './groupslist/groupslist.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FilterdataPipe } from './filterdata.pipe';


const routes: Routes = [
  { path: '', component: GroupslistComponent, pathMatch: 'full' },
  { path: 'groupslist', component: GroupslistComponent },
  { path: 'addgroup', component: CreategroupComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
    HttpModule  
  ],
  declarations: [CreategroupComponent, GroupslistComponent, FilterdataPipe]
})
export class GroupCreationModule { }
