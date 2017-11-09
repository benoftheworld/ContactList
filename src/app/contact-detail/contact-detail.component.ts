import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from "../contact.service";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
})

export class ContactDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, public contactService: ContactService) { }

  contact: Contact[];

  ngOnInit() {
  	//let id = this.route.snapshot.params['id'];
  	//this.contact = this.contactService.getOne(id);
  }

}
