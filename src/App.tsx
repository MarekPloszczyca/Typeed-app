import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Warning from "./Components/Warning";
import Rules from "./Components/Rules";
import Container from "./Components/Container";

function App() {
  const [mobileWarning, setMobileWarning] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMobileWarning(true);
    }, 1000);
  }, []);

  const warningHideHander = () => {
    setMobileWarning(false);
  };

  return (
    <Container>
      {!mobileWarning && <Header />}
      {(!mobileWarning && <Menu />) ||
        (mobileWarning && <Warning warning={warningHideHander} />)}
      {rulesOpen && <Rules />}
    </Container>
  );
}

export default App;
