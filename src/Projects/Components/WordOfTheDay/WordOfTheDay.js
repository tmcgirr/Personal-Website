import "./WordOfTheDay.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const WordOfTheDay = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [pronunciation, setpPronunciation] = useState("");

  useEffect(() => {
    const getWord = {
      method: "GET",
      url: "https://random-words-with-pronunciation.p.rapidapi.com/word",
      headers: {
        "x-rapidapi-host": "random-words-with-pronunciation.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_WORD_API,
      },
    };

    axios
      .request(getWord)
      .then(function(response) {
        setWord(response.data[0].word);
        setDefinition(response.data[0].definition);
        setpPronunciation(response.data[0].pronunciation);
      })
      .catch(function(error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="WordOfTheDay">
      <div className="word">{word}</div>
      <div className="definitionBox">
        <div className="definitionTitle">Definition</div>
        <div className="definition">{definition}</div>
      </div>
      <div className="pronunciationBox">
        <div className="pronunciationTitle">Pronunciation:</div>
        <div className="pronunciation">/{pronunciation}/</div>
      </div>
    </div>
  );
};

export default WordOfTheDay;
