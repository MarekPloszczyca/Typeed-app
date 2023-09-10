import { Fragment, useEffect, useState, Dispatch } from "react";
import WordsField from "./WordsField";
import styles from "./Playground.module.scss";
import Timer from "./Timer";
import Restart from "./Restart";

const fetchWords = async (state: Dispatch<React.SetStateAction<never[]>>) => {
  const [firstResponse, secondResponse] = await Promise.all([
    fetch("https://random-word-api.herokuapp.com/word?length=5&number=300"),
    fetch("https://random-word-api.herokuapp.com/word?length=4&number=300"),
  ]);
  const first = await firstResponse.json();
  const second = await secondResponse.json();
  const array = await first.concat(second);
  return state(array);
};

interface Props {
  onClosePlayground: () => void;
}

export default function Playground(props: Props) {
  const [word, setWord] = useState("");
  const [allWords, setAllWords] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
  const [points, setPoints] = useState(0);
  const [color, setColor] = useState(styles.wrong);
  const [inputColor, setInputColor] = useState("");
  const [time, setTime] = useState(60);
  const [restart, setRestart] = useState(false);

  const randomNumber = Math.floor(Math.random() * 600 ) 

  const wordsComparison = (userInput: string, word: string) => {
    userInput === word ? setColor(styles.correct) : setColor(styles.wrong);
  };
  const wordEnter = (userInput: string, word: string) => {
    if (userInput !== word) {
      return setInputColor(styles.wrongInput);
    }
    if (userInput === word) {
      return setPoints((currentPoints) => currentPoints + 1);
    }
  };

  useEffect(() => {
    fetchWords(setAllWords);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCurrentWord(allWords[0]);
    });
  }, [allWords]);

  useEffect(() => {
    wordsComparison(word, currentWord);
  }, [word, currentWord, color]);

  useEffect(() => {
    setTimeout(() => {
      if (time > 0) {
        setTime((currentTime) => {
          return currentTime - 1;
        });
      } else {
        return setRestart(true);
      }
    }, 1000);
  }, [time]);

  const valueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const wordsChanger = () => {
    setCurrentWord(allWords[randomNumber]);
    setWord("");
  };

  const restartHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    const type = event.currentTarget.className;
    if (type.includes("accept")) {
      setTime(60);
      setPoints(0);
      setCurrentWord(allWords[randomNumber]);
      return setRestart(false);
    } else return props.onClosePlayground();
  };

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
        {restart && <Restart type={restartHandler} score={points} />}
      </Fragment>
    </div>
  );
}
