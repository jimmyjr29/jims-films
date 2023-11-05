import './App.css';
import Intro from './components/intro';
import NavigationBar from './components/NavigationBar';
import SuperHero from './components/Superhiro';
import Trending from './components/Terending';
import "./style/style.css"

function App() {
  return (
    <div>
      {/* intro */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end intro */}

      {/* trending */}
      <div className="trending">
        <Trending />
      </div>
      {/* trending end */}
      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
