import styled from 'styled-components';

const TopContentContainerStyled = styled.div`
  font-size: 24px;
  color: #6550de;
  width: 100%;
  height: 100%;
  display: grid;
  grid-area: imageAndPlayer;
  grid-template-columns: 30% 70%;
  grid-template-rows: 30% 70%;
  grid-template-areas:
    'image answer'
    'image player';
`;

export default TopContentContainerStyled;
