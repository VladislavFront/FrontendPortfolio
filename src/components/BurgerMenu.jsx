import React from 'react';

const BurgerMenu = () => {

  const body = document.querySelector('.body')

  const closedBurgerMenu = () => {
    const settingsMenu = document.querySelector('.settings-menu')
    const burgerMenu = document.querySelector('.burger-menu')

    burgerMenu.classList.remove('menu-open')
    burgerMenu.classList.add('menu-closed')

    settingsMenu.classList.remove('menu-open')
    settingsMenu.classList.add('menu-closed')

    body.classList.remove('overflow')
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
    <div className="burger-menu menu-closed">
      <div className="burger-menu__closed-button" onClick={closedBurgerMenu}></div>
      <nav className="burger-menu__nav">
        <ul className="burger-menu__nav-list">
          <li><a href="#home" className="burger-menu__nav-item" onClick={navItem}>Home</a></li>
          <li><a href="#about" className="burger-menu__nav-item" onClick={navItem}>About</a></li>
          <li><a href="#stack" className="burger-menu__nav-item" onClick={navItem}>Stack</a></li>
          <li><a href="#project" className="burger-menu__nav-item" onClick={navItem}>Project</a></li>
          <li><a href="#contact" className="burger-menu__nav-item" onClick={navItem}>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default BurgerMenu