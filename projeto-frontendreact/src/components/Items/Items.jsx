import React from "react";
import { ItemsContainer, Item,  ItemName, ItemInfo, ItemPrice, ItemQuantity, RemoveItemButton } from "./styled";
export function Items({ cart, setCart, amount, setAmount }){

    const handleRemoveItem = (itemId) => {
        const newCart = cart.filter((item) => item.id !== itemId)

        const itemToRemove = cart.find((item) => item.id === itemId)

        if(itemToRemove){
            const itemTotal = itemToRemove.quantity * itemToRemove.value;
            setAmount(amount - itemTotal)
        }

        setCart(newCart)
    }
    return(
        <ItemsContainer>
            {cart.map((item) =>
                <Item key={item.id}>
                    <ItemInfo>
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>R$ {item.value.toFixed(2)}</ItemPrice>
                      <ItemQuantity>
                        Quantidade: {item.quantity}
                        <RemoveItemButton onClick={() => handleRemoveItem(item.id)}>Remover</RemoveItemButton>
                      </ItemQuantity>
                    </ItemInfo>
                </Item>
            )}
        </ItemsContainer>
    )
}