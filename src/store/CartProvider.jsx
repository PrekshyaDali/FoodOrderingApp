import CartContext from "./cart-context";
import {useReducer } from 'react'

const defaultCartstate = {
    items: [],
    totalAmount: 0,

}
const cartReducer  =(state, action) => {
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);

    }
return defaultCartstate;

}; 

const CartProvider = props =>{
const [cardState, dispatchCardAction]=  useReducer(cartReducer, defaultCartstate);

const addItemToCartHandler = item => {
dispatchCardAction({type: 'ADD', item:item})

}
const removeItemToCartHandler = item => {
dispatchCardAction({type: 'Remove', id:id})

}
const cartcontext = {
    items: cardState.items,
    totalAmount: cardState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
}

return(

<CartContextProvider value= {cartcontext}>
    {props.children}
</CartContextProvider>

);

};

export default CartProvider;