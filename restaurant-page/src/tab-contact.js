
export function addContact() {
    const contentDiv = document.querySelector('#content');

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';
    contact.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email:mail@mail-to-me';
    contact.appendChild(email);
     
    contentDiv.appendChild(contact);
}