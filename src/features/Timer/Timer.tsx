import React from "react";
import s from "./Timer.module.css";
import { BlockTime } from "../../common/BlockTime/BlockTime";

export const Timer = () => {
  return (
    <div className={s.timer}>
      <BlockTime num={60} time={"day"} />
      <BlockTime num={24} time={"hours"} />
      <BlockTime num={12} time={"minutes"} />
      <BlockTime num={10} time={"seconds"} />
    </div>
  );
};
