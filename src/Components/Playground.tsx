import { Fragment, useEffect, useState } from "react";
import WordsField from "./WordsField";
import styles from "./Playground.module.scss";
import Timer from "./Timer";
import Restart from "./Restart";

export default function Playground() {
  const [word, setWord] = useState("");
  const [currentWord, setCurrentWord] = useState("you");
  const [points, setPoints] = useState(0);
  const [color, setColor] = useState(styles.wrong);
  const [inputColor, setInputColor] = useState("");
  const [time, setTime] = useState(1);
  const [restart, setRestart] = useState(false);

  const wordsComparison = (userInput: string, word: string) => {
    userInput === word ? setColor(styles.correct) : setColor(styles.wrong);
  };
  const wordEnter = (userInput: string, word: string) => {
    if (userInput !== word) {
      return setInputColor(styles.wrongInput);
    }
    if (userInput === word) {
      return setPoints(points + 1);
    }
  };

  useEffect(() => {
    wordsComparison(word, currentWord);
  }, [word, currentWord, color]);

  useEffect(() => {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else return setRestart(true);
    }, 1000);
  }, [time]);

  const valueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const wordsChanger = () => {
    setCurrentWord("next");
    setWord("");
  };

  const restartHandler = () => {

  }

  return (
    <div className={!restart ? styles.playground : styles.playgroundCentered}>
      <Fragment>
        {!restart && (
          <Fragment>
            <Timer time={time} />
            <WordsField current={currentWord} points={points} color={color} />
            <input
              type="text"
              value={word}
              className={inputColor}
              onChange={valueChange}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  wordEnter(word, currentWord);
                  wordsChanger();
                  setTimeout(() => {
                    setInputColor("");
                  }, 500);
                }
              }}
              autoFocus
            ></input>
          </Fragment>
        )}
        {restart && <Restart type={restartHandler}/>}
      </Fragment>
    </div>
  );
}
