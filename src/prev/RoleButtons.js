import React from "react";

const RoleButtons = ({ setPlayer }) => {
  const handleClick = (e) => {
    setPlayer((prev) => {
      prev.role = e.target.value;
      return prev;
    });
  };

  return (
    <div>
      <button onClick={handleClick} value="p1">
        Player1
      </button>
      <button onClick={handleClick} value="">
        Spectator
      </button>
      <button onClick={handleClick} value="p2">
        Player2
      </button>
    </div>
  );
};

export default RoleButtons;
