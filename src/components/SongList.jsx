import { connect } from "react-redux";
function SongList(props) {
  console.log(props);
  return <div>SongList</div>;
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
