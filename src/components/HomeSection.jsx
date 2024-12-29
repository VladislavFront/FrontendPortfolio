import React from 'react';

const HomeSection = () => {
  return (
    <section className="section home-section" id="home">
      <div className="hero">
        <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/hero.png?raw=true" alt="фотография разработчика" className="hero__img" width="350px" height="650px"/>
      </div>
      <div className="title-group">
        <h1 className="title-group__hello-title">Привет, я Влад</h1>
        <h2 className="title-group__sub-hello-title active-color">Frontend-developer</h2>
      </div>
    </section>
  )
}

export default HomeSection