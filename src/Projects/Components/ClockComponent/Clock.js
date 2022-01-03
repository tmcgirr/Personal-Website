import React, { useState, useEffect } from "react";
import "./Clock.css";

function Clock(props) {
  const locale = "en";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 6000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default Clock;
