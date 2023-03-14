import styled from "styled-components";

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ItemInfo = styled.div`
  display: flex;
  
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
`;

export const ItemName = styled.span`
  font-size: 1rem;
  margin-right: 0.2rem;

`;

export const ItemQuantity = styled.span`
  font-size: 1rem;
  margin-right: 0.2rem;
`;

export const ItemPrice = styled.span`
  font-size: 1rem;
  margin-right: 0.2rem;
`;


export const RemoveItemButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    border-color: #999;
    color: #fff;
  }
`;