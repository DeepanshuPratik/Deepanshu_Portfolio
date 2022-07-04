import React from 'react'

import {About, Footer, Header, Skills, Testimonials, Work} from './container';
import { Navbar } from './components';

import './App.scss';
import Education from './container/Education/Education';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Work />
      <Skills />
      <Testimonials /> 
      <Footer />
    </div>
  )
}
export default App