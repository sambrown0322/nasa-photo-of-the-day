import React from "react";
// import axios from "axios";
// import "./App.css";
// import styled from "styled-components";

export default function Button(props) {
  const { getPod } = props;

  return <button onClick={getPod}>Click to get the Picture of the Day</button>;
}
