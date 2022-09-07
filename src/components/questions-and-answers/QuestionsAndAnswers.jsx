import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import QuestionsComponent from "./Questions-Answers/q-a-container/QuestionsComponent";
import { GIT_AUTH, API_URL } from "../../../config";

const QuestionsAndAnswers = ({ product }) => {
  const [questions, setQuestions] = useState([]);
  const [originalQuestions, setOriginalQuestions] = useState([]);
  const [update, setUpdate] = useState(false);

  let productID = product.id;
  let productName = product.name;

  console.log(productName, productID);

  useEffect(() => {
    if (productID !== undefined) {
      axios({
        method: "get",
        url: `${API_URL}/qa/questions?product_id=${productID}&count=50`,
        headers: { Authorization: GIT_AUTH },
        responseType: "json",
      })
        .then(({ data }) => data.results)
        .then((results) => {
          console.log("RESULTS", results);
          setQuestions(results);
          setOriginalQuestions(results);
        })
        .catch((err) => {
          console.log("ERROR", err);
        });
    }
  }, [productID, update]);

  console.log(update);

  const handleSearch = (searchText) => {
    searchText = searchText.toLocaleLowerCase();
    if (searchText === "") {
      setQuestions(() => originalQuestions);
    }
    if (searchText.length < 3) {
      return;
    }
    const searchItems = questions.filter((question) => {
      const questionText = JSON.stringify(question).toLocaleLowerCase();
      if (questionText.indexOf(searchText) > -1) {
        return question;
      }
    });

    setQuestions(searchItems);
  };

  return (
    <Container>
      <div>
        <H1>QUESTIONS & ANSWERS...</H1>
        <SearchBar handleSearch={handleSearch} />
        <QuestionsComponent
          questions={questions}
          productName={productName}
          productID={productID}
          setUpdate={setUpdate}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5em;
  margin: 50px 0px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  position: relative;
  flex-direction: column;
`;

const H1 = styled.h1`
  margin-bottom: 0px;
`;

export default QuestionsAndAnswers;
