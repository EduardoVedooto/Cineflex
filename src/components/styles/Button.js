import styled from 'styled-components';

export const Button = styled.button`
    width: ${props => props.schedule ? "83px" : "auto"};
    height: 43px;
    border-radius: 3px;
    background-color: #900020;
    color: #0A0A0A;
    font-size: 18px;
    font-weight: bold;
    border: none;
    outline: none;
`;

export const FinalizationButton = styled(Button)`
    margin: 50px auto 30px auto;
    background-color: ${props => props.isActive ? "#900020" : "#202020"};
    color: ${props => props.isActive ? "#0A0A0A" : "#4c4c4c"};
    pointer-events: ${props => props.isActive ? "#0A0A0A" : "#4c4c4c"};
    cursor: ${props => props.isActive ? "pointer" : "not-allowed"};
    pointer-events: ${props => props.isActive ? "auto" : "none"};
`;

export default { Button, FinalizationButton };