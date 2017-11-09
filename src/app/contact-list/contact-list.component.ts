import { Component, OnInit,  Input, Output, EventEmitter} from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from "../contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})

export class ContactListComponent implements OnInit {

  contact: Contact[];

  constructor(private contactService: ContactService) {  }

  ngOnInit() {
    this.contact = this.contactService.getAll();
  }

}
