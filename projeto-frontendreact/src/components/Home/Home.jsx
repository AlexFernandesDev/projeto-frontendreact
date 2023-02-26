import React, { useEffect, useState } from "react";
import { HomeContainer, HeadHome, HeadBlock, TextHeadHome, SelectOrder, CardDiv } from "./styled";
import { Product } from "../Product/Product";

export function Home({products}){

    const [ordination, setOrdination]=useState('asc')
    const [orderedProducts, setOrderedProducts]=useState([]);

    useEffect(() => {
        const sortedProducts = [...products].sort(compareProducts);
        setOrderedProducts(sortedProducts);
    }, [ordination, products]);

    function handleOrdinationChange(event){
        setOrdination(event.target.value)
    }

    function compareProducts(a, b){
        if(ordination === 'asc'){
            return a.value - b.value
        }else{
            return b.value - a.value
        }
    }

    return(
        <HomeContainer>
            <HeadHome>
            <HeadBlock>
                <TextHeadHome>Quantidade de produtos: {products.length}</TextHeadHome>
            </HeadBlock>
            <HeadBlock>
                <TextHeadHome>Ordenação:</TextHeadHome>           
                <SelectOrder size={1} value={ordination} onChange={handleOrdinationChange}>
                    <option value='asc'>Crescente</option>
                    <option value='desc'>Decrescente</option>
                </SelectOrder>
            </HeadBlock>               
            </HeadHome>
            <CardDiv>
                {orderedProducts.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}  
            </CardDiv>
            
        </HomeContainer>
    )
}