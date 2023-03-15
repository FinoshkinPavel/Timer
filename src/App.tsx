import React from "react";
import s from "./App.module.css";
import { Timer } from "./features/Timer/Timer";

function App() {
  return (
    <div className={s.App}>
      <Timer />
    </div>
  );
}

export default App;
