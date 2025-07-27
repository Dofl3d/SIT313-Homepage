import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Articles from './components/Articles';
import Tutorials from './components/Tutorials';
import Email from './components/Email';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Banner />
      <Articles />
      <Tutorials />
      <Email />
      <Footer />
    </div>
  );
};

export default App;