import styled from "styled-components";
import ReactLoading from "react-loading";

export default function Loading() {
    return(
        <Main>
            <ReactLoading type={"bubbles"} color={"#900020"} width={"100px"}/>
        </Main>
    );
}

const Main = styled.main`
    background-color: #363333;
    width: 100vw;
    height: 100vh;
    padding-top: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
`;