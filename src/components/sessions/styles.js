import styled from 'styled-components';

export const SessionsComponent = styled.main`
    background-color: #363333;
    padding-top: 67px;
    padding-bottom: 120px;
    min-height: 100vh;

    h3 {
        font-size: 20px;
        color: #E9DDD4;
        font-weight: 300;
        margin-left: 10px;
    }
`;

export const ScheduleTable = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    button {
        margin: 10px;
    }
`;

export const DayComponent = styled.div`
    margin-bottom: 20px;
    padding: 0 30px;
`;

const styles = {SessionsComponent, ScheduleTable, DayComponent}
export default styles;