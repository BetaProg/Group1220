import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { GroupslistComponent } from './groupslist/groupslist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreategroupComponent, GroupslistComponent]
})
export class GroupCreationModule { }
