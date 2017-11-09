import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactService {

  data : any;
  constructor() {

    this.data = Array(
			{id : 1, name: "Curtis"},
			{id : 2, name: "Benjamin"},
			{id : 3, name: "Adrien"},
      {id : 4, name: "Manu"},
      {id : 5, name: "Alex"}
		);

   }

  getAll() : Contact[] {
    return this.data;
  }

  getOne(id : Number){
    console.log(this.data);
  }

  post(data){
    //console.log(this.data.length);
    data.id = this.data.length + 1;
    this.data.push(data);
  }

}
