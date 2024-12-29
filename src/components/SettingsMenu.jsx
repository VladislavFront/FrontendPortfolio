import React from 'react';

const SettingsMenu = () => {

  const body = document.querySelector('.body')

  const closedSettingsMenu = () => {
    const settingsMenu = document.querySelector('.settings-menu')
    const burgerMenu = document.querySelector('.burger-menu')

    settingsMenu.classList.remove('menu-open')
    settingsMenu.classList.add('menu-closed')
    
    burgerMenu.classList.remove('menu-open')
    burgerMenu.classList.add('menu-closed')

    body.classList.remove('overflow')
  }

  const activeColorRed = () => {
    document.documentElement.style.setProperty('--activeColor', '#FF0000')
  }
  
  const activeColorGreen = () => {
    document.documentElement.style.setProperty('--activeColor', '#00A524')
  }
  
  const activeColorBlue = () => {
    document.documentElement.style.setProperty('--activeColor', '#008CFF')
  }
  
  const blackTheme = () => {
    document.documentElement.style.setProperty('--backgroundColor', '#323030')
    document.documentElement.style.setProperty('--textColor', '#fff')
  }
  
  const whiteTheme = () => {
    document.documentElement.style.setProperty('--backgroundColor', '#F0F0F0')
    document.documentElement.style.setProperty('--textColor', '#000')
  }

  return (
    <div className="settings-menu menu-closed" >
      <div className="settings-menu__closed-button" onClick={closedSettingsMenu}></div>
      <div className="settings-menu__colors">
        <h2 className="settings-menu__color-title">Color: </h2>
        <button className="settings-menu__colors-button red-color" onClick={activeColorRed}></button>
        <button className="settings-menu__colors-button green-color" onClick={activeColorGreen}></button>
        <button className="settings-menu__colors-button blue-color" onClick={activeColorBlue}></button>
      </div>
      <div className="settings-menu__theme">
        <h2 className="settings-menu__theme-title">Theme: </h2>
        <button className="settings-menu__theme-button" onClick={blackTheme}>Black</button>
        <button className="settings-menu__theme-button" onClick={whiteTheme}>White</button>
      </div>
    </div>
  )
}

export default SettingsMenu