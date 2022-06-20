// import Video from "./components/video/Video"
import "./App.css"
import TextPost1 from "./components/textPost/TextPost1"
import TextPost2 from "./components/textPost/TextPost2"
import TextPost3 from "./components/textPost/TextPost3"
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Grid container className="App">
        <Grid container item xs={12} justifyContent="center">
          <TextPost1/>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <TextPost2/>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
          <TextPost3/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
