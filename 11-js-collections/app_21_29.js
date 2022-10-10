import { hideLoading } from './toggleLoading.js';
const url = 'https://icanhazdadjoke.com/';
 const fetchDadJoke = async () => {
    try {
        const response = await fetch(url, {
            headers: {
                Accept: 'application/json',
                "User-Agent": 'learning app'
            },
        });
        if (!response.ok) {
            throw new Error('error');
        }
        const data = await response.json();
        result.textContent = data.joke;
    } catch (error) {
        result.textContent = 'error...';
    }
 }

 const people = [];
//  export default people;
 people = [...data, ...data];
 window.location.replace("index.html");

export default function removeActive(items) {
    items.forEach((btn) => btn.classList.remove('active'));
}

const params = new URLSearchParams(window.location.search);

const paginate = (followers) => {
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        return followers.slice(start, start + itemsPerPage);
        return newFollowers;
    })
}

// export {
//     getElement,
//     formatPrice
// }

const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format((price / 100).toFixed(2));
    return formattedPrice;
}
const init = async () => {};

window.addEventListener('DOMContentLoaded', init);