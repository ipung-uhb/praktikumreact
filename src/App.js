import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent message="Hello from App Component!" info="Info from App Component!" />
      <Footer />
    </div>
  );
}

export default App;
