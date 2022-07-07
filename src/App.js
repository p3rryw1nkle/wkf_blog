// import Video from "./components/video/Video"
import "./App.css"
import Grid from '@mui/material/Grid';
import NavBar from "./components/navBar/navBar"
import Blog from "./components/pages/Blog"
import About from "./components/pages/About"
import Review from "./components/pages/Review"
// import background from "./components/images/manuscriptBackground.jpeg";

function App() {
  let Component

  switch(window.location.pathname){
      case "/":
        Component = About
        break
      case "/About":
        Component = About
        break
      case "/Blog":
        Component = Blog
        break
        case "/Review":
          Component = Review
          break
      default:
        Component = About
  }  
  return (
    <div className="App">
      <Grid container className="App">
        <NavBar/>
        <Component/>
      </Grid>
    </div>
  );
}

export default App;
