import createMenu from './data.js';

function menu() {
    const content = document.getElementById('content');
    content.textContent = "";
    content.appendChild(createMenu());
}

export default menu;