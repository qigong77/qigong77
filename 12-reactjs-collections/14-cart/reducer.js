const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return {...state, cart: []};
    }
    if (action.type === 'REMOVE') {
        return {
            ...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),

        }
    }
    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount + 1}
            }
            return cart;
        })
        return {...state, cart: tempCart}
    }
    if (action.type === 'DECREASE') {
        let tempCart = state.cart
            .map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return {...cartItem, amount: cartItem.amount - 1}
                }
                return cartItem
            })
            .filter((cartItem) => cartItem.amount !== 0);
            return {...state, cart: tempCart};
    }
    if (action.type === 'GET_TOTALS') {
        let {total, amount} = state.cart.reduce(
            (cartTotal, cartItem) => {
                return cartTotal
            },
            {
                total: 0,
                amount: 0
            }
        )
        return {...state, total, amount: cartItem.amount - 1}
    }
    throw new Error('no matching action type')
}

export default reducer;