import React from "react";
import s from "./BlockTime.module.scss";

type BlockTimeProps = {
  num: string;
  time: string;
};

export const BlockTime: React.FC<BlockTimeProps> = ({ num, time }) => {
  return (
    <div className={s.blockTime}>
      <div className={s.num}>{num}</div>
      <div className={s.time}>{time.toUpperCase()}</div>
    </div>
  );
};
