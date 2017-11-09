import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
})
export class ContactAddComponent implements OnInit {

  form: FormGroup;
	data: any;

  constructor(public contactService: ContactService) { }

  ngOnInit() {
  	this.form = new FormGroup({
  		name: new FormControl("", Validators.required),
  	});
  }

  onSubmit(){
    this.data = {
      id : 0,
      name: this.form.get('name').value
    }
    this.contactService.post(this.data);
  }

}
