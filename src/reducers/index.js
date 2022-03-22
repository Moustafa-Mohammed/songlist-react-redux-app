import { combineReducers } from "redux";
const selectedSongReducer = (state = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return state;
};

const songListReducer = () => {
  return [
    { title: "Macarena 1", duration: "3:23" },
    { title: "Macarena 2", duration: "4:23" },
    { title: "Macarena 3", duration: "5:23" },
  ];
};

export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer,
});
