import React from "react";
import "./Greeting.css";

const today = new Date();
const hour = today.getHours();

const wish = `Good ${(hour < 12 && "Morning") ||
  (hour < 17 && "Afternoon") ||
  "Evening"}! `;

function Greeting() {
  return (
    <div>
      <h1>{wish}</h1>
    </div>
  );
}

export default Greeting;
