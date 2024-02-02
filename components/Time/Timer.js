import React, { useState, useEffect } from "react";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;

    const updateTimer = () => {
      setSeconds((prev) => (prev + 1) % 60);

      if (seconds === 59) {
        setMinutes((prev) => (prev + 1) % 60);
        if (minutes === 59) {
          setHours((prev) => prev + 1);
        }
      }
    };

    interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes, hours]);

  return (
    <div>
      <div className="flex flex-row sm:space-x-4 space-x-1">
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <div className="bg-lime-600 h-16 w-12 rounded-lg text-white text-3xl font-bold flex items-center justify-center ">
              <span>{String(hours).padStart(2, "0")}</span>
            </div>
          </div>
          <div className="text-xl font-Playfair py-3 px-1">
            <h2>
              Hours
            </h2>
          </div>
        </div>
        <div className="flex justify-center  pt-2">
          <span className="text-4xl font-semibold text-black text-center">:</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="">
            <div className="bg-lime-600 h-16 w-12 rounded-lg text-white text-3xl font-bold flex items-center justify-center ">
              <span>{String(minutes).padStart(2, "0")}</span>
            </div>
          </div>
          <div className="text-xl font-Playfair py-3 px-1">
            <h2>
              Minutes
            </h2>
          </div>
        </div>
        <div className="flex justify-center  pt-2">
          <span className="text-4xl font-semibold text-black text-center">:</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="">
            <div className="bg-lime-600 h-16 w-12 rounded-lg text-white text-3xl font-bold flex items-center justify-center ">
              <span>{String(seconds).padStart(2, "0")}</span>
            </div>
          </div>
          <div className="text-xl font-Playfair py-3 px-1">
            <h2>
              Seconds
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
