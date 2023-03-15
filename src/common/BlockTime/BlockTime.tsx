import React from "react";
import s from "./BlockTime.module.css";

type BlockTimeProps = {
  num: number;
  time: string;
};

export const BlockTime: React.FC<BlockTimeProps> = ({ num, time }) => {
  return (
    <div className={s.blockTime}>
      <div>{num}</div>
      <div>{time}</div>
    </div>
  );
};
