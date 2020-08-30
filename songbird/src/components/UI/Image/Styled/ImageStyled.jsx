import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const ImageStyled = styled.img`
  width: 250px;
  height: 155px;
  border-radius: 10px;
  object-fit: cover;

  &.answer {
    @media ${DEVICE.laptopS} {
      width: 80%;
      height: 155px;
    }
  }
`;

export default ImageStyled;
