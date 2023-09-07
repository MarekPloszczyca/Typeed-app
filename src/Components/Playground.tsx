import { useEffect, useState } from "react";
import WordsField from "./WordsField";
import styles from "./Playground.module.scss";

export default function Playground() {
  const [word, setWord] = useState("");
  const [currentWord, setCurrentWord] = useState("you");
  const [nextWord, setNextWord] = useState("message");
  const [color, setColor] = useState(styles.wrong);

  const wordsComparison = (userInput: string, word: string) => {
    userInput === word ? setColor(styles.correct) : setColor(styles.wrong);
  };

  useEffect(() => {
    wordsComparison(word, currentWord);
  }, [word, currentWord, color]);

  const valueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const wordsChanger = () => {
    setCurrentWord(nextWord);
    setNextWord(word);
    setWord("");
  };

  return (
    <div className={styles.playground}>
      <WordsField current={currentWord} next={nextWord} color={color} />
      <input
        type="text"
        value={word}
        onChange={valueChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            wordsChanger();
          }
        }}
      ></input>
    </div>
  );
}
