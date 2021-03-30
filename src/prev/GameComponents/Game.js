import React, { useState } from "react";
import PosThree from "./PosThree";
import PosTwo from "./PosTwo";
import PosZero from "./PosZero";

const Game = ({ setPos, pos }) => {
  // switch (pos) {
  //   case 0:
  //     return (
  //       <div className="App">
  //         <p>{pos}</p>
  //       </div>
  //     );
  //     break;
  //   case 1:
  //     return (
  //       <div className="App">
  //         <p>{pos}</p>
  //       </div>
  //     );
  //     break;
  //   case 2:
  //     return (
  //       <div className="App">
  //         <p>{pos}</p>
  //       </div>
  //     );
  //     break;
  //   case 4:
  //     return (
  //       <div className="App">
  //         <p>{pos}</p>
  //       </div>
  //     );
  //     break;
  //   case 5:
  //     return (
  //       <div className="App">
  //         <p>{pos}</p>
  //       </div>
  //     );
  //     break;
  //   case 6:
  //     return (
  //       <div className="App">
  //         <p>{pos}</p>
  //       </div>
  //     );
  //     break;
  //   default:
  //     return <PosThree />;
  // }
  return <PosZero />;
};

export default Game;
