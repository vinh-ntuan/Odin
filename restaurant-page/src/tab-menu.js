
export function addMenu(){
    const contentDiv = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    menuItem1.textContent = 'Spaghetti Bolognese - $12.99';
    menu.appendChild(menuItem1);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    menuItem2.textContent = 'Margherita Pizza - $10.99';
    menu.appendChild(menuItem2);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    menuItem3.textContent = 'Caesar Salad - $8.99';
    menu.appendChild(menuItem3);

    contentDiv.appendChild(menu);
}