import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../CartIcon/cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    
    background-color: var(--delete-color);
    color: white;

    border-radius: 100%;
    padding: 0px 5px;
    margin-left: -10px;

    font-size: 10px;
`;

const Container = styled.div`
    position: relative;
`;

export function CartControl(){

    const { value } = useLocalStorage('cart-items');
    value.length = 2;

    return(
        <Container>

            <CartIcon/>
            { value.length && <CartCount>{value.length}</CartCount> } 

        </Container>
    )
}