import React from "react";
// import axios from "axios";
// import "./App.css";
import styled from "styled-components";
import Button from "./Button";

const MainBox = styled.div`
  background: midnightblue;
  opacity: 0.9;
  color: white;
  width: 100%;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center; */
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .card {
    background: black;
    width: 50%;
    box-shadow: 0 4px 8px 0 white, 0 6px 20px 0 white;
    text-align: center;
    /* padding: 1%; */
  }
  Button {
    font-size: 16px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;

    &:hover {
      background: red;
      color: white;
      transition: all 0.2s ease-in-out;
    }
  }
  img {
    width: 100%;
    position: cover;
    border-radius: 10px;
  }
  p {
    line-height: 1.3;
    padding: 2%;
  }
`;

export default function Image(props) {
  const { pod, getPod, reset } = props;
  return (
    <MainBox className="imageContainer">
      {/* <ImageInfo /> */}
      <div>
        <h1>Nasa Photo of the Day</h1>
        <Button getPod={getPod}></Button>
      </div>
      <div className="card">
        <img src={pod.url} alt={pod.title} onClick={reset} />

        <h2>{pod.title}</h2>
        <h3>Date: {pod.date}</h3>
        <h3>Copyright: {pod.copyright}</h3>
        <p>{pod.explanation}</p>
      </div>
    </MainBox>
  );
}
