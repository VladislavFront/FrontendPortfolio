import React from 'react';
import ReactDOMClient from 'react-dom/client';

import SettingsMenu from './components/SettingsMenu'
import BurgerMenu from './components/BurgerMenu'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import StactSection from './components/StactSection'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'

import './css/Index.css'
import './css/SettingsMenu.css'
import './css/BurgerMenu.css'
import './css/Header.css'
import './css/HomeSection.css'
import './css/AboutSection.css'
import './css/StackSection.css'
import './css/ProjectSection.css'
import './css/Footer.css'
import './css/Adaptive.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <main className='main'>
    <SettingsMenu/>
    <BurgerMenu/>

    <Header/>
    <HomeSection/>
    <AboutSection/>
    <StactSection/>
    <ProjectSection/>
    <Footer/>
  </main>
);
