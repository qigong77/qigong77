import React from 'react';

const CartItem = () => {
    return (
        <article>
            <button onClick={() => alert('button')}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                </svg>
            </button>
        </article>
    );
};

export default CartItem;