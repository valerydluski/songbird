import styled from 'styled-components';

const HeaderStyled = styled.header`
  height: 100%;
  height: 150px;
  border-bottom: 2px solid;
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const HeaderTopContent = styled.div`
  display: flex;
  height: 75px;
  width: 100%;
  justify-content: space-between;
`;

export default HeaderStyled;
