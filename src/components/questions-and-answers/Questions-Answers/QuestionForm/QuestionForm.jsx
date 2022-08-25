import React from "react";
import styled from "styled-components";
import AddQuestionButton from "./AddQuestionButton";
import MoreQuestionsButton from "./MoreQuestionsButton";

const QuestionForm = () => {
  return (
    <ContainerDiv>
      <MoreQuestionsButton />
      <AddQuestionButton />
    </ContainerDiv>
  );
};

export default QuestionForm;

const ContainerDiv = styled.div`
  background-color: #7e7e7e;
  display: flex;
  margin-top: 10px;
  margin-left: 5px;
`;
