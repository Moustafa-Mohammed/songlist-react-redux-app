import { connect } from "react-redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

function SongList(props) {
  const renderList = () => {
    return props.songs.map((song) => {
      return (
        <Stack
          key={song.title}
          direction="row"
          spacing={12}
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="center"
          mt={2}
        >
          <div>{song.title}</div>
          <Button variant="contained">Select</Button>
        </Stack>
      );
    });
  };
  return <div>{renderList()}</div>;
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
