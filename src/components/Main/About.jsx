import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is IMEGHRI Amine and I am a full stack developer.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='I recently graduated in web development. I’m passionate about creating modern and efficient web applications, and I’m always learning new technologies to improve my skills and become a better developer.'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            22
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                            Traveling, Football and Programming
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> amineimgheri@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            Marrakech, Morocoo
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                        <Link to="/about">
                            <ButtomGet />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                   
                    <div>
                        <img alt="Js" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Tailwind" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
                        <h5>Tailwind css</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>

                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>

                </div>
                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="Spring boot" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
                        <h5>Spring Boot</h5>
                    </div>
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="express" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h5>Express</h5>
                    </div>
                    
                    <div>
                        <img alt="php" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                        <h5>PHP</h5>
                    </div>
                    <div>
                        <img alt="laravel" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
                        <h5>Laravel</h5>
                    </div>
                    <div>
                        <img alt="mysql" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
                        <h5>MySQL</h5>
                    </div>
                    
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h4>
                <div className="skill">
                    <div>
                        <img
                            alt="Visual Studio Code"
                            className="icons-skils"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png"
                            title="Visual Studio Code"
                        />
                        <h5>VS Code</h5>
                    </div>

                    <div>
                        <img
                            alt="git"
                            className="icons-skils"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                            title="Git"
                        />
                        <h5>Git</h5>
                    </div>

                    <div>
                        <img
                            alt="github"
                            className="icons-skils"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            title="GitHub"
                        />
                        <h5>GitHub</h5>
                    </div>

                    <div>
                        <img
                            alt="gitlab"
                            className="icons-skils"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
                            title="GitLab"
                        />
                        <h5>GitLab</h5>
                    </div>

                    <div>
                        <img
                            alt="docker"
                            className="icons-skils"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                            title="Docker"
                        />
                        <h5>Docker</h5>
                    </div>

                    <div>
                        <img
                            alt="sonarqube"
                            className="icons-skils"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg"
                            title="SonarQube"
                        />
                        <h5>SonarQube</h5>
                    </div>
                    <div>
                        <img
                            alt="Postman"
                            className="icons-skils"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                            title="Postman"
                        />
                        <h5>Postman</h5>
                    </div>

                </div>

            </div>
        </div>
    </section>
);


export default React.memo(About);
