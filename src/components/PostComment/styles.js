import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin: 10px 0;
`;

export const Content = styled.div`
  margin-left: 10px;

  width: 100%;
  padding: 10px 15px;

  background: #EEEEEE;
  border-radius: 20px;

  p {
    color: #3E3E3E;
    font-family: Helvetica;
    font-style: normal;
    font-size: 13px;
    line-height: 20px;
    
    span {
      font-weight: bold;
    }
  }
`;
