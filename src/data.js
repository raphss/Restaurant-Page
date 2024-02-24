const appetizers = [
    [
        "Edamame (枝豆)",
        "Agedashi Tofu (揚げ出し豆腐)",
        "Gyoza (餃子)"
    ],
    [
        "Young soybeans lightly salted.",
        "Deep-fried tofu served with dashi-based sauce.",
        "Pan-fried pork and vegetable dumplings."
    ]
];

const sushiRolls = [
    [
        "California Roll (カリフォルニアロール)",
        "Spicy Tuna Roll (スパイシーツナロール)",
        "Dragon Roll (ドラゴンロール)"
    ],
    [
        "Crab, avocado, and cucumber rolled in seaweed and rice, topped with tobiko.",
        "Tuna, spicy mayo, and cucumber rolled in seaweed and rice, topped with green onions.",
        "Shrimp tempura, avocado, and cucumber rolled in seaweed and rice, topped with eel and avocado slices."
    ]
];

const nigiriSashimi = [
    [
        "Salmon Nigiri (サーモン握り)",
        "Tuna Sashimi (マグロ刺身)",
        "Yellowtail Nigiri (ハマチ握り)"
    ],
    [
        "Fresh salmon slices over hand-pressed rice.",
        "Thin slices of raw tuna.",
        "Yellowtail fish atop hand-pressed rice."
    ]
];

const mainCourses = [
    [
        "Teriyaki Chicken (照り焼きチキン)",
        "Beef Yakiniku (焼肉)",
        "Vegetable Tempura Udon (野菜天ぷらうどん)"
    ],
    [
        "Grilled chicken glazed with teriyaki sauce, served with steamed rice and vegetables.",
        "Grilled marinated beef slices served with a side of dipping sauce, rice, and pickled vegetables.",
        "Udon noodles in a savory broth, served with a side of crispy vegetable tempura."
    ]
];

const ramen = [
    [
        "Shoyu Ramen (醤油ラーメン)",
        "Tonkotsu Ramen (豚骨ラーメン)",
        "Veggie Shio Ramen (野菜塩ラーメン)"
    ],
    [
        "Soy sauce-based broth with ramen noodles, topped with sliced chashu pork, green onions, bamboo shoots, and a boiled egg.",
        "Rich pork bone broth with ramen noodles, topped with sliced pork belly, black garlic oil, wood ear mushrooms, and green onions.",
        "Light and clear salt-based broth with ramen noodles, loaded with a variety of colorful vegetables, tofu, and seaweed."
    ]
];

const desserts = [
    [
        "Matcha Green Tea Ice Cream (抹茶アイスクリーム)",
        "Mochi (もち)",
        "Dorayaki (どら焼き)"
    ],
    [
        "Creamy green tea-flavored ice cream.",
        "Soft rice cakes filled with sweetened red bean paste.",
        "Two fluffy pancakes filled with sweet red bean paste."
    ]
];


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

export default createMenu;