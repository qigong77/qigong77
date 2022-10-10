import { element } from "prop-types";

date.innerHTML = new Date().getFullYear();

navToggle.addEventListener("click", function() {
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove("show-link");
    }
});

scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        
        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = 0;
    });
});


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

month = months[month];
const weekday = weekdays[futureDate.getDay()];

function format(item) {
    if (item < 10) {
        return (item = `0${item}`);
    }
    return item;
}

function addItem() {
    let attr = document.createAttribute("data-id");
    element.setAttributeNode(attr);
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    submitBtn.textContent = "submit";
    prevBtn.style.display = "none";
}

class Counter {
    constructor(element, value) {
        this.counter = element;
        this.resetBtn = element.querySelector(".reset");
        this.increase = this.increase.bind(this);
        this.incresetBtn.addEventListener('click', this.increase);
    }
    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;
    }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);

let filteredProducts = [...products];

const displayButtons = () => {
    const buttons = [
        'all',
        ...new Set(products.map((product) => product.company)),
    ];
    companyDOM.innerHTML = buttons
        .map((company) => {
            return `<button>${company}</button>`
        })
        .join("");
};