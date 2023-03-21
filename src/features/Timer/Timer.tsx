import React, { useEffect, useState } from "react";
import s from "./Timer.module.scss";
import { BlockTime } from "../../common/BlockTime/BlockTime";
import { getPadTime } from "../../utils/time-utils";

export const Timer = () => {
  const [days, setDays] = useState<string>();
  const [hours, setHours] = useState<string>();
  const [minutes, setMinutes] = useState<string>();
  const [seconds, setSeconds] = useState<string>();

  let interval: number;

  const startTimer = () => {
    //заданная дата
    const data = new Date("Jan 1 2024 00:00:00");
    interval = window.setInterval(() => {
      //нынешняя дата
      const now = new Date();
      //distance = промежуток в милисекундах от заданной даты выше до нынешней даты
      const distance = +data - +now;
      if (distance < 0) {
        clearInterval(interval);
      } else {
        //distance / 1000 = получаем кол-во секунд, / 60 = получаем кол-во минут, / 60 получам кол-во часов, / 24 получаем кол-во дней
        setDays(getPadTime(Math.floor(distance / 1000 / 60 / 60 / 24)));
        // в конце деление по модулю, т.е. остаток выражения деленного на 24 получаем кол-во часов
        setHours(getPadTime(Math.floor(distance / 1000 / 60 / 60) % 24));
        setMinutes(getPadTime(Math.floor(distance / 1000 / 60) % 60));
        setSeconds(getPadTime(Math.floor(distance / 1000) % 60));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={s.timer}>
      <BlockTime num={days ? days : "00"} time={"day"} />
      <BlockTime num={hours ? hours : "00"} time={"hours"} />
      <BlockTime num={minutes ? minutes : "00"} time={"minutes"} />
      <BlockTime num={seconds ? seconds : "00"} time={"seconds"} />
    </div>
  );
};
