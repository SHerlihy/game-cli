import React, { useState } from "react";
import Playing from "../Screens/Playing/Playing";
import NewGame from "../Screens/NewGame/NewGame";
import { useSelector } from "react-redux";

const App = () => {
  const myID = useSelector((state) => state.myID);

  //myPos={myPos()} reset={reset}
  return <div className="app">{myID ? <Playing /> : <NewGame />}</div>;
};

export default App;
