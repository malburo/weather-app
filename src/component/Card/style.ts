import styled from 'styled-components';

export const WrapperInfoCard = styled.div`
  min-width: 100px;
  width: 100%;
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  span {
    color: white;
  }
`;
export const WrapperCityCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #616475;
    cursor: pointer;
  }
  p {
    margin: 0;
    padding: 20px;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
