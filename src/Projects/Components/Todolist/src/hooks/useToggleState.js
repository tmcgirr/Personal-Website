import { useState } from "react";

// eslint-disable-next-line
export default (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const toggle = () => setState(!state);

  return [state, toggle];
};
