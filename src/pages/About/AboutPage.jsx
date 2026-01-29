import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/me.png';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />

              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                <FormattedMessage
                  id='btn-cv'
                  defaultMessage='Download CV'
                />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id="about-info-1"
                  defaultMessage="Hi! I’m Amine Imeghri, a passionate Full Stack Web Developer with a diploma in Digital Development – Web Option from the Institut Spécialisé de Technologie Appliquée NTIC Sidi Youssef Ben Ali – Marrakech. Throughout my journey, I’ve developed multiple Full Stack projects using React, Laravel, Tailwind CSS, and Bootstrap, combining modern design with robust functionality."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id="about-info-2"
                    defaultMessage="I have a solid understanding of APIs and Microservices architecture, which allows me to build scalable and efficient web applications. I consider myself a curious and self-taught learner, always seeking to improve my skills and discover new technologies."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id="about-info-3"
                    defaultMessage="I’m deeply motivated by the idea of creating innovative digital solutions that make people’s lives easier. My goal is to keep growing as a developer — exploring new frameworks, mastering backend and frontend integration, and contributing to meaningful projects that have a real impact."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}>
                  <span>Read more</span>
                </div>
              </div>
            </div>


          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              {/* HTML */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-1'
                    defaultMessage='More than a year of professional experience in this language, allows me to perform without problems in the industry.'
                  />
                </p>
              </div>

              {/* CSS */}
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-2'
                    defaultMessage='More than a year of work experience in this language, I use it daily to develop web designs and interfaces.'
                  />
                </p>
              </div>

              {/* Javascript */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-3'
                    defaultMessage='A year of experience using it in the front-end and back-end branch, allowed me to familiarize myself with the language, and include it in my work projects.'
                  />
                </p>
              </div>

              {/* Bootstrap */}
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-4'
                    defaultMessage='Less than a year using this framework, even so, I used it in countless work projects, which allowed me to get to know it for the most part.'
                  />
                </p>
              </div>

              {/* React */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="react" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="ReactJs" />
                <h2 className="skill-name">ReactJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-5'
                    defaultMessage='More than a year using this JavaScript framework, carrying out multiple personal and work projects.'
                  />
                </p>
              </div>

              {/* NodeJs */}
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="nodejs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="NodeJs" />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-6'
                    defaultMessage='It is the cross-platform runtime environment that I use to make my web applications scalable.'
                  />
                </p>
              </div>

              {/* Express */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="express" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" title="Express" />
                <h2 className="skill-name">Express</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='It is a framework that I use mostly to be able to manage my APIs in the best way and my http execution model.'
                  />
                </p>
              </div>

              {/* Laravel */}
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="laravel" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" title="Laravel" />
                <h2 className="skill-name">Laravel</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='Over a year of experience developing full stack applications using Laravel, including REST APIs and backend logic for scalable projects.'
                  />
                </p>
              </div>

              {/* Tailwind CSS */}
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="tailwind" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" title="Tailwind CSS" />
                <h2 className="skill-name">Tailwind CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-9'
                    defaultMessage='I use Tailwind CSS to create responsive and modern user interfaces efficiently, integrating it with React and Laravel projects.'
                  />
                </p>
              </div>

            </div>
          </div>

        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;