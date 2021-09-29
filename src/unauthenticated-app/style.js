import styled from 'styled-components';

import Img from '../assets/img/logo.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-flow: column;
  align-items: center;
  button {
    margin-left: 80px;
    width: 70%;
    margin-top: 20px;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 180px;
  background: url(${Img}) no-repeat center;
  background-size: 10rem;
`;

export const Box = styled.div`
  width: 480px;
  min-height: 500px;
  padding: 60px 20px;
  box-shadow: 0 0 10px rgba(0, 25, 25, 0.1);
`;
