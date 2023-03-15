import React from "react";
import s from "./App.module.scss";
import { Timer } from "./features/Timer/Timer";

function App() {
  return (
    <div className={s.App}>
      <span className={s.title}>COUNTDOWN:</span>
      <Timer />
    </div>
  );
}

export default App;
