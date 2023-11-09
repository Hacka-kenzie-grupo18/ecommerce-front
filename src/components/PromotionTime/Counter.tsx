import React, { useState, useEffect } from "react";

interface CounterProps {
  days: number;
}

const Counter: React.FC<CounterProps> = ({ days }) => {
  const totalSeconds = days * 86400; // Converter dias em segundos
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(remainingSeconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [remainingSeconds]);

  function calculateTimeRemaining(totalSeconds: number) {
    if (totalSeconds <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const seconds = totalSeconds % 60;
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const days = Math.floor(totalSeconds / 86400);

    return { days, hours, minutes, seconds };
  }

  const remainingTime = calculateTimeRemaining(remainingSeconds);

  return (
    <div className="w-fit h-20 flex flex-col text-black items-center justify-center">
      <div className="text-4xl maxsm:text-[25px] font-extrabold ">
        {remainingTime.days}d {remainingTime.hours}:{remainingTime.minutes}:
        {remainingTime.seconds}
      </div>
    </div>
  );
};

export default Counter;
