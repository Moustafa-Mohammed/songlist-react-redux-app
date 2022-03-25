import SongDetails from "../reducers/SongDetails";
import "./App.css";
import SongList from "./SongList";

function App() {
  return (
    <div className="App">
      <SongList />
      <SongDetails />
    </div>
  );
}

export default App;
