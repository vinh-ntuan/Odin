const contentDiv = document.querySelector('#content');

export function addAbout(){
    const about = document.createElement('div');
    about.classList.add('about');

    const aboutText = document.createElement('p');
    aboutText.textContent = 'We are a family-owned restaurant serving delicious food since 1990.';
    about.appendChild(aboutText);

    const historyText = document.createElement('p');
    historyText.textContent = 'Our history is rich and our recipes are passed down through generations.';
    about.appendChild(historyText);

    contentDiv.appendChild(about);   
}