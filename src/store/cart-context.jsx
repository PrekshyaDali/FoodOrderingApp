import React from 'react'

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) =>{},
    removeItem: (id) =>{}
});

export default CartContext;

//we are providing inital default values when a component consuming this context does not have access to a matching provider
