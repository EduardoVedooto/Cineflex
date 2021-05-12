import styled from "styled-components";

export const SeatsComponent = styled.main`
    padding-top: 67px;
    padding-bottom: 120px;
    background-color: #363333;
    min-width: 350px;
    ul{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 350px;
        margin: 0 auto;
    }
`;

export const SeatComponent = styled.li`
    ${props => console.log(props)}
    border-radius: 50px;
    background-color: ${props => props.isAvailable ?  "#E9DDD4" : "#202020"};
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 4px;
    font-weight: 300;
    color: ${props => props.isAvailable ?  "#0A0A0A" : "#4c4c4c"};
    box-shadow: ${props => props.isAvailable ? "0 0 6px rgba(0,0,0,.9)" : ""};
`;

export default {SeatsComponent, SeatComponent};