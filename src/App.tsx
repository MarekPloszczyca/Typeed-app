import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Warning from "./Components/Warning";
import Rules from "./Components/Rules";
import Container from "./Components/Container";
import Playground from "./Components/Playground";
import Confirmation from "./Components/Confirmation";

function App() {
  const [mobileWarning, setMobileWarning] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const [userReady, setUserReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMobileWarning(true);
    }, 1000);
  }, []);

  const warningHandler = () => {
    mobileWarning ? setMobileWarning(false) : setMobileWarning(true);
  };
  const rulesHandler = () => {
    rulesOpen ? setRulesOpen(false) : setRulesOpen(true);
  };
  const gameHandler = () => {
    gameOpen ? setGameOpen(false) : setGameOpen(true);
  };
  const userConfirmationHandler = () => {
    userReady ? setUserReady(false) : setUserReady(true);
  };

  const clickButton = (event: React.MouseEvent<HTMLInputElement>) => {
    const buttonType = event.currentTarget.textContent;
    if (buttonType === "PLAY") {
      return userConfirmationHandler();
    } else return rulesHandler();
  };
  const confirmationHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    const type = event.currentTarget.className;
    if (type.includes("green")) {
      return gameHandler();
    } else return userConfirmationHandler();
  };

  const menuHide = !gameOpen && !rulesOpen && !mobileWarning && !userReady;

  return (
    <Container>
      {menuHide && <Header />}
      {(menuHide && <Menu clickButton={clickButton} />) ||
        (!gameOpen && !rulesOpen && mobileWarning && (
          <Warning warning={warningHandler} />
        ))}
      {!gameOpen && rulesOpen && <Rules rules={rulesHandler} />}
      {!gameOpen && !rulesOpen && !mobileWarning && userReady && (
        <Confirmation type={confirmationHandler} />
      )}
      {gameOpen && <Playground />}
    </Container>
  );
}

export default App;
