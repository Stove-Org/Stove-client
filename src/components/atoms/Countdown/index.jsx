import { useEffect, useState } from "react";

const Countdown = (date) => {
  const setDate = new Date(date);
  const now = new Date();

  const dis = setDate.getTime() - now.getTime();
  const min1 = 1000 * 60;

  const h = Math.floor(dis / (min1 * 60 * 24));
  const m = Math.floor((dis % (min1 * 60 * 24)) / (min1 * 60));
  const d = Math.floor((dis % (min1 * 60)) / min1);
  const s = Math.floor((dis % min1) / 1000);

  const [day, setDay] = useState(h);
  const [hour, setHour] = useState(m);
  const [minutes, setMinutes] = useState(d);
  const [seconds, setSeconds] = useState(s);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) setSeconds(parseInt(seconds) - 1);

      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          if (parseInt(hour) === 0) {
            if (parseInt(day) === 0) {
              clearInterval(countdown);
            } else {
              setDay(parseInt(day) - 1);
              setHour(23);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setHour(parseInt(hour) - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [day, hour, minutes, seconds]);

  return (
    <>
      {day}일 {hour < 10 ? `0${hour}` : hour}:
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </>
  );
};

export default Countdown;
