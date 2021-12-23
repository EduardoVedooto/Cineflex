import styled from "styled-components";

export const HomeContainer = styled.main`
    padding-top: 67px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #363333;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    li {
        width: 145px;
        height: 209px;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E9DDD4;
        box-shadow: 0 3px 7px rgba(0,0,0,.5);
        border-radius: 4px;
    }

    img {
        width: 90%;
        height: 90%;
        border-radius: 3px;
    }
`;