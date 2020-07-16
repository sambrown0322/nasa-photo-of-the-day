import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
import ImageInfo from "./ImageInfo";

export default function Image(props) {
  const { pod, info, title, date, copy } = props;

  return (
    <div className="imageContainer">
      {/* <ImageInfo /> */}
      <img src={pod} />
      <h1>{title}</h1>
      <h3>Date: {date}</h3>
      <h3>Copyright: {copy}</h3>
      <p>{info}</p>
    </div>
  );
}
