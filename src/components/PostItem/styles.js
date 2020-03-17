import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.133916);
  border-radius: 4px;

  padding: 20px;
  margin-bottom: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 140px;
  width: 100%;

  div {
    p {
      font-family: Helvetica;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;

      color: #4A4A4A;
    }
    p + p {
      font-family: Helvetica;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 13px;
      
      color: #9A9A9A;
    }
  }
`;

export const Content = styled.p`
  margin: 15px 0 20px 0;

  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;

  color: #3E3E3E;
`;

export const Divisor = styled.div`
  width: 100%;
  height: 1px;

  background: #EEEEEE;
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 0 0 0;
`;
