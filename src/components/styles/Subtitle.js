import styled from 'styled-components';

export const Subtitle = styled.h2`
    text-align: center;
    font-size: 24px;
    padding: 38px 0;
    font-weight: bold;
    color: ${props => props.confirmation? "#78dc44" : "#E9DDD4"};
    text-shadow: 0 0 2px #6b6b6b;
`;


const styles = {Subtitle};
export default styles;