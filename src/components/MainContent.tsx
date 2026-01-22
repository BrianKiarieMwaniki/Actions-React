import { useState } from "react";
import HelpArea from "./HelpArea";

const MainContent = () => {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }


  return (
    <main>
        <button onClick={toggleHelp}>{helpVisible ? "Hide" : "Show"}</button>
        {helpVisible && <HelpArea />}
    </main>
  );
};

export default MainContent;
