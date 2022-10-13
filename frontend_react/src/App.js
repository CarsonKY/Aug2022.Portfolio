import React from 'react';
// import TestJS from './components/testapp';

// Import containers from index.js
import {About, Footer, Header, Skills, Testimonial, Work} from './container';
// Import components from index.js
import { Navbar } from './components';

// const App = () => {
  function App () {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
     <Work />
     <Skills />
     <Testimonial />
     <Footer />
    <TestJS />
    </div>
  );
}

export default App;

     
     