import React from 'react';

const AboutSection = () => {
  return (
    <section className="section" id="about">
      <h2 className="section__title">Обо мне</h2>
      <div className="content">
        <div className="text-block">
          <p className="text-block__text">
            Я - Влад, мне 14 лет. <br/>
            <br />
            <span className="active-color">Frontend</span>-разработчик, создаю различного рода <span className="active-color">сайты</span>: лендинги, Интернет-магазины, одностраничные сайты, динамичные веб-страницы и т.д. <br/>
            <br/>
            Работаю с такими <span className="active-color">инструментами</span>, как: HTML, CSS, JavaScript, React, VS Code, GitHub, Figma. <br/>
            Работаю-(л) с <span className="active-color">JavaScript-библиотеками</span>. Такими, как: Swiper Slider JS, Three JS, SweetAlert, Email JS. <br/>
            <br/>
            В моём портфолио свыше <span className="active-color">10 работ</span>, в дальнейшем их количество будет расти.
          </p>
        </div>
        <div className="hero hero-about">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/hero.png?raw=true" alt="фотография разработчика" className="hero__img" width="350px" height="650px"/>
        </div>
      </div>
    </section>
  )
}

export default AboutSection