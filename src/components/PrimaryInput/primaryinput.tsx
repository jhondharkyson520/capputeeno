import styled from "styled-components";
import { SearchIcon } from "../SearchIcon/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    border: none;
    padding: 10px 16px;

    background-color: var(--bg-secondary);
    color: var(--text-dark);

    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;

`;

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`;


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}

export function PrimaryInputWSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput {...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}