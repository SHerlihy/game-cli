import io from "socket.io-client";

export const socket = io("http://localhost:8080");

// may have to do through redux or maybe wrap with hoc?
// import { useDispatch, useSelector } from "react-redux";
// import { changeGame, changeMyID } from "./Actions";

// const dispatch = useDispatch();

// export const reset = () => {
//   socket.off();
//   dispatch(changeGame({}));
//   dispatch(changeMyID(false));
// };
