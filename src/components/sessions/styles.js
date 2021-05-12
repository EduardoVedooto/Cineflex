import styled from 'styled-components';

export const SessionsComponent = styled.main`
    background-color: #363333;
    padding-top: 67px;
    padding-bottom: 120px;
    height: 100%;

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

export default {SessionsComponent, ScheduleTable, DayComponent};