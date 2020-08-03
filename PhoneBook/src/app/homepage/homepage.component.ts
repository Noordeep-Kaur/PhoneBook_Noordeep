import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Contacts } from './homepage';
import { ContactsService } from './homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  
  // @Input()myContacts:Contacts;
  contact:Contacts;
  contacts:Contacts[];
  open:boolean;
  upd:boolean;
  sear:boolean;
  dum:string;
  extra:Contacts[];
  dummy:Contacts[];
  constructor(private contactSer:ContactsService) { 
    this.contact=new Contacts();
    this.contacts = this.contactSer.contacts;
    this.open=false;
    this.upd=false;
    this.sear=false;
  }
  addContact()
  {
      this.contacts.push(this.contact);
      this.contact = new Contacts();
  }
  openForm() {
    this.open=true;  
  }
  closeForm() {
    this.open=false;  
  }
  removeItem(addedItem:Contacts){
    this.dummy=[];
    for(let index=0;index<this.contacts.length;index++)
    {
      if(this.contacts[index].firstName!=addedItem.firstName)
      {
        this.dummy.push(this.contacts[index]);
      }
    }
    this.contacts=this.dummy;
  }

  update(fname:string,lname:string,pnumber:string){

    for (let i = 0; i < this.contacts.length; i++) {
        if(this.contacts[i].firstName == this.dum){
          this.contacts[i].firstName =fname ;
          this.contacts[i].lastName =lname ;
          this.contacts[i].phoneNumber =pnumber ;
        }
      }
      this.upd=false;
      this.dum=null;
  }
  display(newItem:Contacts)
  {
    this.upd=true;
    this.dum=newItem.firstName;
  }

  search(name:string)
  {
    this.extra=[];
    this.sear=true;
    for(let i=0;i<this.contacts.length;i++)
    {
      if(this.contacts[i].firstName==name)
      {
        this.extra.push(this.contacts[i]);
      }
    }
  }

  ngOnInit(): void {
  }

}
