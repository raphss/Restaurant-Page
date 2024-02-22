import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log('Looks like we are in production mode!');
}

function component() {

  const header = document.createElement('header');
  const nav = document.createElement('nav');

  const buttonsNames = ["Home", "Menu", "About"];

  for (let i = 0; i < buttonsNames.length; i++) {
    const button = document.createElement('button');
    button.textContent = buttonsNames[i];
    button.classList.add('nav-buttons');
    nav.appendChild(button);
  }

  header.appendChild(nav);

  const content = document.createElement('div');
  content.id = 'content';

  return {
    header,
    content
  };
}

document.body.appendChild(component().header);
document.body.appendChild(component().content);

console.log("Everything's fine!");