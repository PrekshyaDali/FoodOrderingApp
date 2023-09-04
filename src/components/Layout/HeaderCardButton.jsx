import classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";



const HeaderCardButton = (props) => {
 const cartCtx =  useContext(CartContext);

 const numberofCartItems = cartCtx.items.reduce((curNumber, item)=>{
  return curNumber+item.amount;
 }, 0);
//reduce is a builtin method which allows us to transform an array of data into single value
  return (
    <button className={classes.button} onClick = {props.onClick}>
      <span className={classes.icon}>
        <CartIcon> </CartIcon>
      </span>
      <span>Your Cart</span>
      <span className = {classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
