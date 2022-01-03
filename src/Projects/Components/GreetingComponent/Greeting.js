import React, { useState } from "react";
import "./Greeting.css";

const today = new Date();
const hour = today.getHours();

const wish = `Good ${
  (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
}! `;

function Greeting() {
  const [user, setUser] = useState("");

  return (
    <div>
      <h1>
        {wish} {user}
      </h1>
    </div>
  );
}

export default Greeting;
