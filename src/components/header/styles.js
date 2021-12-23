import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #0A0A0A;
    height: 67px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    
    
    h1 {
        font-size: 34px;
        font-weight: bold;
        color: #900020;
    }

    svg {
        border-radius: 10px;
        position: absolute;
        left: 10px;
        cursor: pointer;
        display: ${props => props.enableGoBack ? "initial" : "none"};
    }
`;
