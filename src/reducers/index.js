import { combineReducers } from "redux";
const selectedSongReducer = (state = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return state;
};

const songListReducer = () => {
  return [
    { title: "Song 1", duration: "3:23" },
    { title: "Song 2", duration: "4:23" },
    { title: "Song 3", duration: "5:23" },
  ];
};

export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer,
});
