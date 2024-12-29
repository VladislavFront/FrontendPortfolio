import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';

import '../css/ProjectSection.css';

const ProjectSection = () => {
  return (
    <section className="section" id="project">
    <h2 className="section__title">Мои проекты</h2>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/olimpia.png?raw=true" alt="фотография сайта студии ПМ" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">23.12.2024</span> Сайт студии перманентного макияжа</h3>
            <a href="https://vladislavfront.github.io/Olimpia/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/psychologist.png?raw=true" alt="фотография сайта психолога" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">13.11.2024</span> Сайт для психолога</h3>
            <a href="https://vladislavfront.github.io/Psychologist/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/searchHeighbors.png?raw=true" alt="фотография сайта поиска соседей" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">30.10.2024</span> Сайт по поиску соседей</h3>
            <a href="https://vladislavfront.github.io/SearchHeighbors/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/octoglass.png?raw=true" alt="фотография сайта компании Octoglass" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">18.10.2024</span> Сайт компании Octoglass</h3>
            <a href="https://vladislavfront.github.io/Octoglass/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/proExlusive.png?raw=true" alt="фотография сайта компании ProExlusive" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">14.10.2024</span> Сайт компании ProExlusive</h3>
            <a href="https://vladislavfront.github.io/ProExlusive/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/realtor.png?raw=true" alt="фотография сайта риелторской конторы" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">08.10.2024</span> Сайт риелторской конторы</h3>
            <a href="https://vladislavfront.github.io/Realtor/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/coffeHouse.png?raw=true" alt="фотография сайта кофейни" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">07.03.2024</span> Сайт кофейни в Москве</h3>
            <a href="https://vladislavfront.github.io/CoffeHouse/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/airLine.png?raw=true" alt="фотография сайта авиакомпании" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">23.02.2024</span> Сайт авиакомпании</h3>
            <a href="https://vladislavfront.github.io/AirLine/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/noshkafe.png?raw=true" alt="фотография сайта ресторана" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">22.02.2024</span> Сайт ресторана в Москве</h3>
            <a href="https://vladislavfront.github.io/NoshKafe/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/internetShop.png?raw=true" alt="фотография сайта ресторана" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">27.01.2024</span> Сайт интернет-магазина</h3>
            <a href="https://vladislavfront.github.io/InternetShop/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/calculator.png?raw=true" alt="фотография сайта калькулятора" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">19.12.2023</span> Сайт калькулятор</h3>
            <a href="https://vladislavfront.github.io/Calculator/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/numbergenerate.png?raw=true" alt="фотография сайта генератора чисел" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">05.12.2023</span> Сайт генератор чисел</h3>
            <a href="https://vladislavfront.github.io/NumberGenerator/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/pomodoro.png?raw=true" alt="фотография сайта помодоро-трекера" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">25.11.2023</span> Сайт помодоро-трекер</h3>
            <a href="https://vladislavfront.github.io/PomodoroTrecker/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/keyboardtrening.png?raw=true" alt="фотография сайта клавиатурного тренажера" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">20.11.2023</span> Сайт клавиатурного тренажера</h3>
            <a href="https://vladislavfront.github.io/KeyBoardTrening/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="project-card">
          <img src="https://github.com/VladislavFront/FrontendPortfolio/blob/main/src/img/projectSection/scetchik.png?raw=true" alt="фотография сайта обратного отсчета до НГ" className="project-card__img"/>
          <div className="project-card__info">
            <h3 className="project-card__info-title"><span className="active-color">23.10.2023</span> Сайт обратного отсчета до НГ</h3>
            <a href="https://vladislavfront.github.io/Scetchik/html/index.html" className="project-card__open-button">Открыть</a>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>

    </section>
  )
}

export default ProjectSection