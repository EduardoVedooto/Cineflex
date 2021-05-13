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
`;

export default { Button, FinalizationButton };