import './App.css';
import NavigationBar from './component/NavigationBar';
import "./style/LandingPage.css"
import Intro from './component/Intro';
import Trending from './component/Trending';
import Adventure from './component/Adventure';
import Movie from './component/Movie';
function App() {
  return (
     <div> 
      {/* intro section */}
      <div className="myBG">
      <NavigationBar />
      <Intro />
      </div>
      {/* end intro */}

      {/* trending section */}
      <div className="trending">
        <Trending/>
      </div>
     
    {/* end of trending section */}
  <div className="Adventure">
    <Adventure />
  </div>

   {/* movie section */}

<div className="Movie">
    <Movie />
</div>
</div>
  );
}

export default App;
