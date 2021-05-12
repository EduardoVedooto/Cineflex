import styled from "styled-components";

export const HomeContainer = styled.main`
    padding-top: 67px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #363333;

    h2 {
        text-align: center;
        font-size: 24px;
        padding: 38px 0;
        font-weight: bold;
        color: #E9DDD4;
        text-shadow: 0 0 2px #6b6b6b;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    li {
        width: 145px;
        height: 209px;
        margin: 34px;
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