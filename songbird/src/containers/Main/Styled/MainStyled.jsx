import styled from 'styled-components';

const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 60% 10%;
  grid-template-areas:
    'imageAndPlayer imageAndPlayer'
    'gameField resultField'
    'button button';
  width: 100%;
  height: 100%;
`;

export default MainStyled;
