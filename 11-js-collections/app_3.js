window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
})

function showPerson(person) {
    const item = reviews[person];
}

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
})