import styled from 'styled-components';

import Img from '../../assets/img/right.svg';

export const HeadDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: url(${Img}) no-repeat 80px 20px;
  background-color: #555;
  .right {
    position: absolute;
    top: 5%;
    right: 10%;
  }
  .left {
    margin-top: 30px;
    a {
      padding: 20px;
    }
  }
`;
