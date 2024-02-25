import {
    appetizers,
    sushiRolls,
    nigiriSashimi,
    mainCourses,
    ramen,
    desserts
} from './data.js';

function createItem(option) {

    const names = [];
    const descriptions = [];

    for (let i = 0; i <= option.length; i++) {

        const name = option[0][i];
        const description = option[1][i];

        names.push(name);
        descriptions.push(description);
    }

    return createMenuItem(names, descriptions);
}

function createMenuItem(names, descriptions) {

    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    for (let i = 0; i < names.length; i++) {

        const eachFood = document.createElement('div');
        eachFood.classList.add('eachFood');

        const foodName = document.createElement('h3');
        foodName.textContent = names[i];

        const foodDesc = document.createElement('p');
        foodDesc.textContent = descriptions[i];

        eachFood.appendChild(foodName);
        eachFood.appendChild(foodDesc);

        eachFood.style.border = '0.4vh solid #e83737b0';
        eachFood.style.borderRadius = '2vh';
        eachFood.style.margin = '3vh';
        eachFood.style.padding = '2vh';

        menuItem.appendChild(eachFood);
    }

    return menuItem;
}

function createMenu() {

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const appetizersTitle = document.createElement('h2');
    appetizersTitle.textContent = "Appetizers";

    const sushiRollsTitle = document.createElement('h2');
    sushiRollsTitle.textContent = "Sushi Rolls";

    const nigiriSashimiTitle = document.createElement('h2');
    nigiriSashimiTitle.textContent = "Nigiri/Sashimi";

    const mainCoursesTitle = document.createElement('h2');
    mainCoursesTitle.textContent = "Main Courses";

    const ramenTitle = document.createElement('h2');
    ramenTitle.textContent = "Ramen";

    const dessertsTitle = document.createElement('h2');
    dessertsTitle.textContent = "Desserts";

    menu.appendChild(appetizersTitle);
    menu.appendChild(createItem(appetizers));

    menu.appendChild(sushiRollsTitle);
    menu.appendChild(createItem(sushiRolls));

    menu.appendChild(nigiriSashimiTitle);
    menu.appendChild(createItem(nigiriSashimi));

    menu.appendChild(mainCoursesTitle);
    menu.appendChild(createItem(mainCourses));

    menu.appendChild(ramenTitle);
    menu.appendChild(createItem(ramen));

    menu.appendChild(dessertsTitle);
    menu.appendChild(createItem(desserts));

    return menu;
}

function menu() {
    const content = document.getElementById('content');
    content.textContent = "";
    content.appendChild(createMenu());
}

export default menu;