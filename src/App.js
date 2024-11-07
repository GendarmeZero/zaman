import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    </div>
  );
}

export default App;
