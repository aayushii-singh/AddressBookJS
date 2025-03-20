const Contact = require("./Script.js/Contact");
const AddressBook = require("./Script.js/AddressBook");

const myAddressBook = new AddressBook();

const contact1 = new Contact("Ayushi", "Singh", "123 MG Road", "Delhi", "Delhi", "110001", "9876543210", "ayushi@example.com");
const contact2 = new Contact("Ashutosh", "Sharma", "456 Lajpat Nagar", "Mumbai", "Maharashtra", "400001", "9876543211", "ashutosh@example.com");
const contact3 = new Contact("Rahul", "Verma", "789 Connaught Place", "Delhi", "Delhi", "110002", "9876543212", "rahul@example.com");

myAddressBook.addContact(contact1);
myAddressBook.addContact(contact2);
myAddressBook.addContact(contact3);

myAddressBook.displayContacts();

// View persons by City
myAddressBook.viewPersonsByCity("Delhi");

// View persons by State
myAddressBook.viewPersonsByState("Maharashtra");
