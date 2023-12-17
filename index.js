const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");
const { nanoid } = require("nanoid");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);
      break;

    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
      break;

    case "add":
      const newContacts = addContact({ name, email, phone });
      return console.log(newContacts);
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
// invokeAction({action:"get"});
// invokeAction({ action: "list" });
// invokeAction({ action: "remove" });
// invokeAction({
//   action: "add",
//   name: "Mango",
//   email: "mango@gmail.com",
//   phone: "322-22-22",
// });
