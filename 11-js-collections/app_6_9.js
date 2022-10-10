modalBtn.addEventListener("click", function() {
    modal.classList.add("open-modal");
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {

        return `<div></div>
        
        `
    });
    displayMenu = displayMenu.join("");
}


function displayMenuButtons() {
    const categories = menu.reduce(
        function (value, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ['all']
    );
    const categoryBtns = categories
    .map(function(category) {
        return  `<div></div>`;
    }).join("");
    
}