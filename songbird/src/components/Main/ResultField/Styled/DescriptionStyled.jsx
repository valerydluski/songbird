import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const DescriptionStyled = styled.div`
  display: flex;
  grid-area: description;
  font-size: 18px;
  margin: 0 10px;
  &.modalText {
    color: #6550de;
    font-size: 30px;

    @media ${DEVICE.tablet} {
      font-size: 24px;
    }
  }
  @media ${DEVICE.laptopS} {
    font-size: 16px;
  }
`;

export default DescriptionStyled;
