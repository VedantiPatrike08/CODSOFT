const breakfastCategory = document.getElementById('breakfast');
const lunchCategory = document.getElementById('lunch');
const dinnerCategory = document.getElementById('dinner');
const menuItemsContainer = document.getElementById('menu-items');

const showBreakfastMenu = () => {
    menuItemsContainer.innerHTML = `
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <!-- Add more breakfast items -->
        </ul>
    `;
    menuItemsContainer.style.display = 'block';
};

const showLunchMenu = () => {
    menuItemsContainer.innerHTML = `
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <!-- Add more lunch items -->
        </ul>
    `;
    menuItemsContainer.style.display = 'block';
};

const showDinnerMenu = () => {
    menuItemsContainer.innerHTML = `
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <!-- Add more dinner items -->
        </ul>
    `;
    menuItemsContainer.style.display = 'block';
};

breakfastCategory.addEventListener('click', showBreakfastMenu);
lunchCategory.addEventListener('click', showLunchMenu);
dinnerCategory.addEventListener('click', showDinnerMenu);
