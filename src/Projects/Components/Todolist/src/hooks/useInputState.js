import { useState } from "react";

// eslint-disable-next-line
export default (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => setValue(e.target.value);
  const clearValue = () => setValue("");

  return [value, handleChange, clearValue];
};
