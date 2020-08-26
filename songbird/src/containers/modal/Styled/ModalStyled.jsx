import styled from 'styled-components';

const ModalStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  min-width: fit-content;
  height: 90vh;
  min-height: fit-content;
  padding: 10px;
  flex-direction: column;
  border-radius: 20px;
  background-color: white;
  z-index: 111;
  transition: all 0.5s;
  box-shadow: 7.2203px 7.2203px 9.92791px rgba(0, 0, 0, 0.05);
  border-radius: 20.7584px;

  @media (max-width: 768px) {
    width: 70%;
    .modalPageButton {
      font-size: 14px;
      width: 140px;
      height: 37px;
      }
  }

  @media (max-width: 500px) {
    .modalPageButton {
    font-size: 10px;
    width: 74px;
    height: 37px;
    }
`;

export default ModalStyled;
