import './style.css';
import home from './home.js';
import menu from './menu.js';
import about from './about.js';

function component() {
  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('h1');
  title.textContent = 'アスガルド';
  title.classList.add('title');

  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const buttonsNames = ['Home', 'Menu', 'About'];

  const content = document.createElement('div');
  content.id = 'content';

  for (let i = 0; i < buttonsNames.length; i++) {
    const button = document.createElement('button');
    button.textContent = buttonsNames[i];
    button.classList.add('nav-buttons');

    if (i === 0) {
      button.addEventListener('click', () => {
        home();
      });
    } else if (i === 1) {
      button.addEventListener('click', () => {
        menu();
      });
    } else if (i === 2) {
      button.addEventListener('click', () => {
        about();
      });
    }

    nav.appendChild(button);
  }

  header.appendChild(title);
  header.appendChild(nav);

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
