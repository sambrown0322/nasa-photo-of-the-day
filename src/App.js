import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Image from "./Components/Image";

const apiKey = "a7o7bTZ9JUYQq7IcTJrg4OUse4weaD2tk9kxvHZx";
// const asteroid = `https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=${apiKey}`;
// axios.get(asteroid).then((res) => {
//   console.log(res);
// });
function App() {
  const [pod, getPod] = useState();
  const [info, setInfo] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [copy, setCopy] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2020-07-15`
      )
      .then((res) => {
        getPod(res.data.url);
        setInfo(res.data.explanation);
        setTitle(res.data.title);
        setDate(res.data.date);
        setCopy(res.data.copyright);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Image pod={pod} info={info} title={title} date={date} copy={copy} />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p> */}
    </div>
  );
}

export default App;
