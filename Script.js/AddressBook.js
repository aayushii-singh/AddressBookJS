
const Contact = require("./contact");

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
            console.log("✔ Contact added successfully!");
        } else {
            console.log("❌ Invalid contact!");
        }
    }

    displayContacts() {
        console.log("\n📘 Address Book Contacts:");
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            this.contacts.forEach((contact, index) => {
                console.log(`${index + 1}. ${contact.display()}`);
            });
        }
    }
}

module.exports = AddressBook;
