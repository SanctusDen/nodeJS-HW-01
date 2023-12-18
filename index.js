const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);
      break;

    case "get":
      const oneContact = await getContactById(id);
      return console.table(oneContact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      return console.table(newContact);
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      return console.table(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
