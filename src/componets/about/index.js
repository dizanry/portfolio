import React from 'react';
import './style.css';
import img1 from "../../assets/WhatsApp Image 2020-07-01 at 17.21.45.jpeg";
import {faReact, faVuejs, faCss3Alt, faPhp, faHtml5, faJsSquare} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function About() {

    return(
          <div className='About container'>

              <div className='columns'>

                  <div className="column is-centered">

                      <figure className='has-text-centered'>
                          <img className='is-128x128' src={img1}></img>
                      </figure>
                      <h1 className="title is-2 has-text-centered">Anry Dias</h1>
                      <h2 className="subtitle is-5 is-bold has-text-centered"><p>Full-stack Web Developer</p></h2>
                      <h2 className="subtitle is-5 has-text-centered">
                          <p> Eu sou um desenvolvedor full-stack começando minha carreira e apaixonado
                              por aprender coisas novas. Além disso, sou uma pessoa fácil de lidar e me
                              encaixo bem em qualquer time.<br></br>Com o meu trabalho espero
                              gerar um impacto positivo no mundo atavés da tecnologia :)</p>


                      </h2>
                  <div className='has-text-centered'>

                      <span className="tag is-primary is-light">Responsivo</span>
                      <span className="tag is-info is-light">Dinâmico</span>
                      <span className="tag is-link is-light">Intuitivo</span>
                  </div>


              </div>
              <div className='column padding box-skills'>
                  <h1 className='title is-3 '>Habilidades</h1>
                  <h1 className='subtitle progress-bar padding'><FontAwesomeIcon icon={faReact}></FontAwesomeIcon> ReactJS</h1>
                  <progress className="progress is-primary" value="70" max="100">70%</progress>

                  <h1 className='subtitle progress-bar'><FontAwesomeIcon icon={faVuejs}></FontAwesomeIcon> VueJS</h1>
                  <progress className="progress is-primary" value="65" max="100">65%</progress>

                  <h1 className='subtitle progress-bar'><FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon> Javascript</h1>
                  <progress className="progress is-primary" value="90" max="100">90%</progress>

                  <h1 className='subtitle progress-bar'><FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon> Html5</h1>
                  <progress className="progress is-primary" value="95" max="100">95%</progress>

                  <h1 className='subtitle progress-bar'><FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon> Css</h1>
                  <progress className="progress is-primary" value="90" max="100">90%</progress>

                  <h1 className='subtitle progress-bar'><FontAwesomeIcon icon={faPhp}></FontAwesomeIcon> Php</h1>
                  <progress className="progress is-primary" value="80" max="100">80%</progress>

                  <button className="button is-large is-fullwidth is-link is-outlined">Mais sobre mim</button>

              </div>
          </div>
          </div>


    );

}
export default About;