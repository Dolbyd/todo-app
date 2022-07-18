import React from 'react';

import './App.css';
import Footer from './Components/layoutArea/Footer/Footer';
import Header from './Components/layoutArea/Header/Header';
import Main from './Components/layoutArea/Main/Main';
import Menu from './Components/layoutArea/Menu/Menu';

function App() {
  return (
    <div className="App">
        <Header/>
        <Menu/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
