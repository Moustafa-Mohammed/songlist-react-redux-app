import React from "react";
import { connect } from "react-redux";

function SongDetails({ song }) {
  if (!song) {
    return <div>You have to select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title}</p>
      <hr />
      <p>Duration: {song.duration}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
