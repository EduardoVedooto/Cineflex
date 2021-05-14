import styled from "styled-components";

export const FooterComponent = styled.footer`
    background-color: #0A0A0A;
    height: 120px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: center;
    padding: 8px;

    img {
        height: 90%;
    }

    p {
        color: #E9DDD4;
        margin-left: 10px;
        font-size: 24px;
        font-weight: bold;
    }
`;