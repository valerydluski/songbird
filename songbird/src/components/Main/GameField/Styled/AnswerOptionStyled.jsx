import styled from 'styled-components';

const AnswerOptionStyled = styled.li`
  display: flex;
  text-align: center;
  margin-left: 20px;
  border-bottom: 2px solid #6550de;
  cursor: pointer;

  &.correct {
    border-bottom: 2px solid green;
  }

  &.not-correct {
    border-bottom: 2px solid red;
  }
`;

export default AnswerOptionStyled;
