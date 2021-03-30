import React, { useState } from "react";

const Roll = ({ setPlayer }) => {
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    setTotal(e.target.value);
  };

  const handleClick = () => {
    setPlayer((prev) => {
      prev.total = total;
      return prev;
    });
  };
  return (
    <div>
      <input onChange={handleChange} value={total} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Roll;
