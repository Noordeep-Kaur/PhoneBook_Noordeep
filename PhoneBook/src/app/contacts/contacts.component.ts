import { Component, OnInit } from '@angular/core';
import { ContactsService} from '../homepage/homepage.service';
import { Contacts } from '../homepage/homepage';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts:Contacts[];
  contact:Contacts;
  constructor(private contactsService:ContactsService) { 
    this.contacts = this.contactsService.contacts;
  }

  ngOnInit(): void {
  }
  // showOption(){
  //   return this.contactsService.getContacts();
  // }
}
