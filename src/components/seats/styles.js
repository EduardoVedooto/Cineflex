import styled from "styled-components";

export const SeatsComponent = styled.main`
    padding-top: 67px;
    padding-bottom: 120px;
    background-color: #363333;
    min-width: 350px;
    display: flex;
    flex-direction: column;

    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 350px;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
        color: #0A0A0A;
        margin: 0 auto;
        cursor: pointer;
    }
`;

export const SeatComponent = styled.li`
    border-radius: 50px;
    background-color: ${props => props.isAvailable ? props.isSelected ? "#900020" : "#E9DDD4" : "#202020"};
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 4px;
    font-weight: 300;
    color: ${props => props.isAvailable ? props.isSelected ? "#E9DDD4" : "#0A0A0A" : "#4c4c4c"};
    box-shadow: ${props => props.isAvailable ? "0 0 6px rgba(0,0,0,.9)" : ""};
    cursor: ${props => props.isLabel ? "default" : "pointer"};
`;

export const InputComponent = styled.div`
    
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 10px auto;

    input {
        background-color: #808080;
        outline: none;
        border: 1px solid #202020;
        height: 50px;
        padding-left: 10px;
        border-radius: 3px;
        color: #101010;
        font-size: 18px;
        ::placeholder{
            color: #404040;
        }
        :focus{
            box-shadow: 0 0 6px rgba(0,0,0,.5);
        }
    }

    label {
        color: #E9DDD4;
        margin-bottom: 8px;
    }
`;

export const LabelComponent = styled.div`
    display: flex;
    margin: 0 auto 30px auto;
    width: 300px;
    justify-content: space-around;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: 300;
        color: rgba(233,221,212,.7);
    }
`;

export default {SeatsComponent, SeatComponent, InputComponent, LabelComponent};