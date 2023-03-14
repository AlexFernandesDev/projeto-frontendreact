import React from "react";
import { CartContainer, CartTitle } from "./styled";
import { Items } from "../Items/Items";



export function Cart({ cart, setCart, amount, setAmount }){
    return(
        <CartContainer >
            <CartTitle>Carrinho</CartTitle>
            <Items cart={cart} setCart={setCart} amount={amount} setAmount={setAmount}/>
            <div>Total: R$ {amount.toFixed(2)}</div>
        </CartContainer>
    )
}