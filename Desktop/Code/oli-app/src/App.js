import './App.css';
import TopNav from './components/TopNav.jsx';
import BottomNav from './components/BottomNav.jsx';
import Main from './components/Main.jsx';

function App() {
  return (
    <div className="App">

      <img className='App-logo' src="https://oli-gallery.s3-us-west-2.amazonaws.com/Oli-Logo-STACKED-Brown-Gallery.png"></img>

      <TopNav/>
      <Main/>
      <BottomNav/>
    </div>
  );
}

export default App;
