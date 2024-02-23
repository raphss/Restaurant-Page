import './style.css';
import menuTab from './menu';
import aboutTab from './about';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log('Looks like we are in production mode!');
}

function component() {

  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('h1');
  title.textContent = "アスガルド";
  title.classList.add('title');

  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const buttonsNames = ["Home", "Menu", "About"];

  for (let i = 0; i < buttonsNames.length; i++) {
    const button = document.createElement('button');
    button.textContent = buttonsNames[i];
    button.classList.add('nav-buttons');
    nav.appendChild(button);
  }

  header.appendChild(title);
  header.appendChild(nav);

  const content = document.createElement('div');
  content.id = 'content';

  const footer = document.createElement('div');
  footer.classList.add('footer');

  const copy = document.createElement('p');
  copy.innerHTML = 'Copyright &copy; 2024 Raphael Vilete';

  footer.appendChild(copy);

  return {
    header,
    content,
    footer
  };
}

const components = component();

document.body.appendChild(components.header);
document.body.appendChild(components.content);
document.body.appendChild(components.footer);