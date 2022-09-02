import React, { useState } from "react";
import styled from "styled-components";
import AddButtonComponent from "./AddButtonComponent";

const AddQuestionButton = ({ productName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen((preState) => !preState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    /// API call

    setIsOpen(false);
  };

  return (
    <div>
      <AddButtonComponent
        name={name}
        onClick={onClick}
        isOpen={isOpen}
        showHeader={false}
        title={"Ask Your Question"}
      >
        <Form onSubmit={onSubmit}>
          {" "}
          <H4> About the {productName}</H4>
          <div> *What is your nickname </div>
          <input maxLength="60" placeholder="jack543!" type="text" />
          <div> *Your email </div>
          <input
            maxLength="60"
            placeholder="Example: jack@email.com"
            type="text"
          />
          <div> *Your Question</div>
          <textarea
            maxLength="1000"
            rows="6"
            cols="50"
            placeholder="Answer Here..."
          ></textarea>
          <button>Submit</button>
        </Form>
      </AddButtonComponent>
    </div>
  );
};

export default AddQuestionButton;

const name = "ADD A QUESTION";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const H4 = styled.h4`
  margin-top: 5px;
  margin-bottom: 15px;
`;
