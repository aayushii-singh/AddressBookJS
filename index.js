const Contact = require("./Script.js/Contact");
const AddressBook = require("./Script.js/AddressBook");

const myAddressBook = new AddressBook();

const contact1 = new Contact("Ayushi", "Singh", "123 MG Road", "Delhi", "Delhi", "110001", "9876543210", "ayushi@example.com");
const contact2 = new Contact("Ashutosh", "Sharma", "456 Lajpat Nagar", "Mumbai", "Maharashtra", "400001", "9876543211", "ashutosh@example.com");

myAddressBook.addContact(contact1);
myAddressBook.addContact(contact2);

myAddressBook.displayContacts();

// Deleting Contact
myAddressBook.deleteContact("Ayushi");

myAddressBook.displayContacts();
