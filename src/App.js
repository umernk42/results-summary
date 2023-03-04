import logo from "./logo.svg";
import "./App.css";
import Upper from "./components/Upper";
import Lower from "./components/Lower";
import React from "react";
import "./assets/fonts/HankenGrotesk-VariableFont_wght.ttf";
import { useState } from "react";
import IconMemory from './assets/images/icon-memory.svg';
import IconReaction from './assets/images/icon-reaction.svg';
import IconVerbal from './assets/images/icon-verbal.svg';
import IconVisual from './assets/images/icon-visual.svg';

export const scoreContext = React.createContext();

const initial = [
  [IconReaction,'Reaction',45,'hsl(0, 100%, 67%)'],
  [IconMemory,'Memory',34,'hsl(39, 100%, 56%)'],
  [IconVerbal,'Verbal',61,'hsl(166, 100%, 37%)'],
  [IconVisual,'Visual',72,'hsl(234, 85%, 45%)']
]



function App() {
  const [scores, setScores] = useState(initial);

  return (
    <React.Fragment>
      <scoreContext.Provider value = {scores}>
        <main>
          <Upper />
          <Lower />
        </main>
      </scoreContext.Provider>
    </React.Fragment>
  );
}

export default App;
