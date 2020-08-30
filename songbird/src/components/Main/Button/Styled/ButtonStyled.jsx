import styled from 'styled-components';

const ButtonStyled = styled.button`
  position: relative;
  height: 53px;
  width: 80%;
  grid-area: button;
  background-color: #6550de;
  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  outline-style: none;
  border: none;
  cursor: pointer;
  place-self: center;
  text-shadow: none;

  &.not-active {
    color: #6550de;
    background-color: #ffffff;
    border: 2px solid #6550de;
  }

  &.modalPageButton {
    margin-top: 20px;

    @media (max-width: 768px) {
      font-size: 14px;
      width: 140px;
      height: 37px;
    }
  }
`;

export default ButtonStyled;
