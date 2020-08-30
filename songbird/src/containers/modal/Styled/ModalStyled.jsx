import styled from 'styled-components';

const ModalStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 90vh;
  max-height: 500px;
  min-height: fit-content;
  padding: 10px;
  flex-direction: column;
  border-radius: 20px;
  background-color: white;
  z-index: 111;
  transition: all 0.5s;
  box-shadow: 7.2203px 7.2203px 9.92791px rgba(0, 0, 0, 0.05);
  border-radius: 20.7584px;
`;

export default ModalStyled;
