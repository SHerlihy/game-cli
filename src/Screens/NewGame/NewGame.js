import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGame } from "../../Actions";

const NewGame = ({
  socket,
  setMyID,
  myID,
  // setGame,
  // game,
  setInputID,
  inputID,
}) => {
  const game = useSelector((state) => state.game);

  const dispatch = useDispatch();

  const create = () => {
    socket.emit("create-game");
  };

  socket.on("created-game", ({ newGame, cliID }) => {
    setMyID(cliID);
    // setGame(newGame);
    dispatch(changeGame(newGame));
  });

  const handleInputID = (e) => {
    setInputID(e.target.value);
  };

  const joinGame = (e) => {
    e.preventDefault();
    socket.emit("join-game", inputID);
  };

  socket.on("joining-game", ({ joinGame }) => {
    const x = joinGame.clients.length;

    setMyID(joinGame.clients[x - 1]);
    // setGame(joinGame);
    dispatch(changeGame(joinGame));
  });

  return (
    <div>
      <button onClick={create}>Create</button>
      <p>{game.gameID}</p>
      <form onSubmit={joinGame}>
        <input value={inputID} onChange={handleInputID}></input>
        <button type="submit">Join</button>
      </form>
      <p>{myID}</p>
    </div>
  );
};

export default NewGame;
