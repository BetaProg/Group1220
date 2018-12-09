import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  // transform(items: any[], value: string, label:string): any[] {
    // if (!items) return [];
    // if (!value) return  items;
    // if (value == '' || value == null) return [];
    // return items.filter(e => e[label].toLowerCase().indexOf(value) > -1 );
    
  // }
  
  transform(users: any[], value: string, label:string): any[] {
	// console.log(label);
    if (!users) return [];
    if (!value) return  users;
    if (value == '' || value == null) return [];
    return users.filter(e => e[label].toLowerCase().indexOf(value) > -1 );
    
  }

}
