import React from 'react';
import Cat from './components/cat';
// import { CircleLoader } from 'react-spinners';


// Pages
import About from './components/land/about';
// import Vission from './components/land/vission'
// import Swiper from './components/land/swiper';
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
        <Home />
        <About />
        <Cat/>
    </div>
  );
}

export default App;