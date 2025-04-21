const contentDiv = document.querySelector('#content');

export function addHome() {
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'Restaurant Name';
    header.appendChild(title);
    contentDiv.appendChild(header);

    const main = document.createElement('main');
    const description = document.createElement('p');
    description.textContent = 'Welcome to our restaurant! We serve the best food in town.';
    main.appendChild(description);
    contentDiv.appendChild(main);

    const footer = document.createElement('footer');
    footer.textContent = '© 2023 Restaurant Name';
    contentDiv.appendChild(footer);
}
