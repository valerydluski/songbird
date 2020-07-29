import styled from 'styled-components';

const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 40% 50% 10%;
  grid-template-areas:
    'imageAndPlayer imageAndPlayer'
    'gameField resultField'
    'button button';
  width: 100%;
  height: 700px;
`;

export default MainStyled;
