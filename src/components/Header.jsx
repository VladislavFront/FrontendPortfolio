import React from 'react';

const Header = () => {

  const body = document.querySelector('.body')

  const openSettingsMenu = () => {
    const settingsMenu = document.querySelector('.settings-menu')
    const burgerMenu = document.querySelector('.burger-menu')

    settingsMenu.classList.remove('menu-closed')
    settingsMenu.classList.add('menu-open')
    
    burgerMenu.classList.remove('menu-open')
    burgerMenu.classList.add('menu-closed')

    body.classList.add('overflow')
  }

  const openBurgerMenu = () => {
    const settingsMenu = document.querySelector('.settings-menu')
    const burgerMenu = document.querySelector('.burger-menu')

    burgerMenu.classList.remove('menu-closed')
    burgerMenu.classList.add('menu-open')

    settingsMenu.classList.remove('menu-open')
    settingsMenu.classList.add('menu-closed')

    body.classList.add('overflow')
  }

  const navItem = () => {
    const settingsMenu = document.querySelector('.settings-menu')
    const burgerMenu = document.querySelector('.burger-menu')

    burgerMenu.classList.remove('menu-open')
    burgerMenu.classList.add('menu-closed')

    settingsMenu.classList.remove('menu-open')
    settingsMenu.classList.add('menu-closed')

    body.classList.remove('overflow')
  }

  return (
    <header className="header">
      <div className="settings">
        <div className="settings__button" onClick={openSettingsMenu}>
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/settings.png?raw=true" alt="шестеренка" className="settings-button__img"/>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li><a href="#home" className="header__nav-item" onClick={navItem}> Home </a></li>
          <li><a href="#about" className="header__nav-item" onClick={navItem}> About </a></li>
          <li><a href="#stack" className="header__nav-item" onClick={navItem}> Stack </a></li>
          <li><a href="#project" className="header__nav-item" onClick={navItem}> Project </a></li>
          <li><a href="#contact" className="header__nav-item" onClick={navItem}> Contact </a></li>
        </ul>
      </nav>
      <div className="burger-button" onClick={openBurgerMenu}>
        <span className="burger-button__span"></span>
      </div>
    </header>
  )
}

export default Header