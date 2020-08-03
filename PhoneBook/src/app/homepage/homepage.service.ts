import { Contacts } from './homepage';

export class ContactsService{
    contacts:Contacts[];
    constructor(){
        this.contacts = [];
        var contact1,contact2,contact3,contact4,contact5;
        contact1 = new Contacts();
        contact1.firstName="Eric";
        contact1.lastName="Elliot";
        contact1.phoneNumber="222-555-6575";

        contact2 = new Contacts();
        contact2.firstName="Steve";
        contact2.lastName="Jobs";
        contact2.phoneNumber="220-454-6754";

        contact3 = new Contacts();
        contact3.firstName="Fred";
        contact3.lastName="Allen";
        contact3.phoneNumber="210-657-9886";

        contact4 = new Contacts();
        contact4.firstName="Steve";
        contact4.lastName="Wozniak";
        contact4.phoneNumber="343-675-8786";

        contact5 = new Contacts();
        contact5.firstName="Bill";
        contact5.lastName="Gates";
        contact5.phoneNumber="234-567-9789";
       
       this.contacts.push(contact1);
       this.contacts.push(contact2);
       this.contacts.push(contact3);
       this.contacts.push(contact4);
       this.contacts.push(contact5);
       }

    //    getContacts():Contacts[]
    //    {
    //        return this.contacts;
    //    }

       addContacts(c:Contacts)
       {
           this.contacts.push(c);
       }
}