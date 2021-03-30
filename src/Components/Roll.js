import React, { useState } from "react";

const Roll = ({ socket, myID, game }) => {
  const [total, setTotal] = useState();
  const gameID = game.gameID;
  const submitTotal = () => {
    const subTotal = Number(total);
    socket.emit("submit-total", { subTotal, myID, gameID });
  };

  const handleTotal = (e) => {
    setTotal(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitTotal}>
        <input value={total} onChange={handleTotal}></input>
        <button type="submit">Submit Total</button>
      </form>
    </div>
  );
};

export default Roll;
