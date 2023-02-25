import React, { useState } from "react";
import { HomeContainer, HeadHome, HeadBlock, TextHeadHome, SelectOrder, CardDiv } from "./styled";
import { ProductCard } from "../ProductCard/ProductCard";

export function Home({products}){

    const [onrdination, setOrdination]=useState('')

    function handleOrdinationChange(event){
        setOrdination(event.target.value)
    }
    return(
        <HomeContainer>
            <HeadHome>
            <HeadBlock>
                <TextHeadHome>Quantidade de produtos: {products.length}</TextHeadHome>
            </HeadBlock>
            <HeadBlock>
                <TextHeadHome>Ordenação:</TextHeadHome>           
                <SelectOrder size={1} value={onrdination} onChange={handleOrdinationChange}>
                    <option value='asc'>Crescente</option>
                    <option value='desc'>Decrescente</option>
                </SelectOrder>
            </HeadBlock>               
            </HeadHome>
            <CardDiv>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}  
            </CardDiv>
            
        </HomeContainer>
    )
}