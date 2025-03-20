const AddressBook = require("./Script.js/AddressBook");
const Contact = require("./Script.js/Contact");

const myAddressBook = new AddressBook();

// Sample contacts
const contact1 = new Contact("Ayushi", "Singh", "MG Road", "Delhi", "Delhi", "110001", "9876543210", "ayushi@example.com");
const contact2 = new Contact("Ashutosh", "Sharma", "Park Street", "Mumbai", "Maharashtra", "400001", "9876543211", "ashutosh@example.com");
const contact3 = new Contact("Neha", "Verma", "Sector 18", "Noida", "Uttar Pradesh", "201301", "9876543212", "neha@example.com");

myAddressBook.addContact(contact1);
myAddressBook.addContact(contact2);
myAddressBook.addContact(contact3);

console.log("Before Sorting:");
myAddressBook.displayContacts();

// Sorting contacts by City, State, and Zip
console.log("\nSorted by City:");
myAddressBook.sortByCity();
myAddressBook.displayContacts();

console.log("\nSorted by State:");
myAddressBook.sortByState();
myAddressBook.displayContacts();

console.log("\nSorted by Zip:");
myAddressBook.sortByZip();
myAddressBook.displayContacts();
