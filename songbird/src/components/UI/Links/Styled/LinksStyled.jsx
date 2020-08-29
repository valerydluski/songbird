import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const LiStyled = styled.li`
  display: flex;
  flex: auto;
  text-align: center;
  margin: 10px;
`;

export const AStyled = styled.a`
  color: #6550de;
  font-size: 24px;
  text-decoration: none;
  width: 100%;
  cursor: default;

  @media ${DEVICE.laptopM} {
    font-size: 18px;
  }

  &.active {
    background-color: #6550de;
    color: #ffffff;
    text-shadow: none;
  }
`;

export default LiStyled;
