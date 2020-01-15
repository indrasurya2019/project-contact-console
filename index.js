const names = ['Durian', 'Alpha Avalon', 'Betty Brave', 'Gamma Gacurio'];

//Experiments to manage the names
const showNames = names => {
  // loop over the names array
  for (let index = 0; index < names.length; index++) {
    // name and names are different
    const name = names[index];

    // log the name and index at the same time
    console.log(`[${index + 1}] ${name}`);
  }
};
showNames(names);

//latihan2:
const filterNames = (names, minimumlength) => {
  let newNames = [];
  for (let index = 0; index <= names.length - 1; index++) {
    const name = names[index];
    if (name.length > minimumlength) {
      newNames.push(name);
    }
  }
  return newNames;
};

const namesWithChar12 = filterNames(names, 12);
console.log('///////////////////');
showNames(namesWithChar12);
console.log('   ');
console.log('////////////////////////////////');
//data:
const myContacts = [
  {
    id: 1,
    name: 'Alpha Avalon',
    phone: '+1 111 101010',
    email: 'alpha@avalon.org',
    favorite: true,
    rating: 9,
    tags: ['popular', 'cool']
  },
  {
    id: 2,
    name: 'Betty Brave',
    phone: '+62 812 242424',
    email: 'betty@braverian.com'
  },
  {
    id: 3,
    name: 'Gamma Gacurio',
    phone: '+63 813 363636',
    email: 'gamma@gacurio.dev'
  }
];

const showContacts = contacts => {
  for (let i = 0; i <= contacts.length - 1; i++) {
    const contact = contacts[i];
    console.log(
      `${contact.id} ${contact.name} ${contact.phone} <${contact.email}>`
    );
  }
};
showContacts(myContacts);

console.log('////////////////////////////////');

const filterContacts = (myContacts, minimumNamelength) => {
  let newContactsx = [];
  for (let i = 0; i <= myContacts.length - 1; i++) {
    let contact = myContacts[i];
    if (myContacts[i].name.length > minimumNamelength) {
      newContactsx.push(contact);
    }
  }
  return newContactsx;
};

// const filterContacts = (contacts, minimumNameLength) => {
//   let newContacts = [];

//   for (let index = 0; index < contacts.length; index++) {
//     const contact = contacts[index];

//     if (contacts[index].name.length >= minimumNameLength) {
//       newContacts.push(contact);
//     }
//   }

//   return newContacts;
// };

const filteredContacts = filterContacts(myContacts, 12);

showContacts(filteredContacts);
