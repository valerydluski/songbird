import styled from 'styled-components';
import { DEVICE } from '../../../config';

const HeaderStyled = styled.header`
  height: 100%;
  height: 150px;
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;

  @media ${DEVICE.laptop} {
    height: 250px;
  }
`;

export const HeaderTopContent = styled.div`
  display: flex;
  height: 75px;
  width: 100%;
  justify-content: space-between;
`;

export default HeaderStyled;
