import { Routes, Route } from 'react-router-dom';

// main header
import Header from './components/Header/Header';

// components
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';

// import global style
import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='' Component={Home} />
        <Route path='about' Component={AboutUs} />
        <Route path='contact' Component={Contact} />
      </Routes>
    </>
  );
}

export default App;
