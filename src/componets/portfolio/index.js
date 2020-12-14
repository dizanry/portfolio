import React from 'react';
import './style.css';
import img1 from '../../assets/respondeai.png'
import img2 from '../../assets/anryflix.png'
import img3 from '../../assets/mudalas.png'
import img4 from '../../assets/bitcoin.png'

function Portfolio() {
    return(
            <div className='Portfolio'>
                <div className='column container'>
                    <div className="columns is-desktop">
                        <div className="column">

                            <div className="card">
                                <div className='card-header-title'>Responde aí</div>
                                <div className="card-header">
                                    <img src={img1}/>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
      <span>
          <a href="https://www.respondeai.com.br/">Ir para o site</a>
      </span>
                                    </p>
                                    <p className="card-footer-item">
      <span>
          <a href="#">Saiba mais</a>
      </span>
                                    </p>
                                </footer>
                            </div>

                        </div>

                        <div className="column">

                            <div className="card">
                                <div className='card-header-title'>Anryflix</div>
                                <div className="card-header">
                                    <img src={img2}/>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
      <span>
          <a href="https://anryflix.vercel.app/">Ir para o site</a>
      </span>
                                    </p>
                                    <p className="card-footer-item">
      <span>
          <a href="#">Saiba mais</a>
      </span>
                                    </p>
                                </footer>
                            </div>

                        </div>

                        <div className="column">

                            <div className="card">
                                <div className='card-header-title'>Mu Dalas</div>
                                <div className="card-header">
                                    <img src={img3}/>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
      <span>
          <a href="https://mudalas.net/">Ir para o site</a>
      </span>
                                    </p>
                                    <p className="card-footer-item">
      <span>
          <a href="#">Saiba mais</a>
      </span>
                                    </p>
                                </footer>
                            </div>

                        </div>

                        <div className="column">

                            <div className="card">
                                <div className='card-header-title'>IPPON</div>
                                <div className="card-header">
                                    <img src={img4}/>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
      <span>
          <a href="#">Ir para o site</a>
      </span>
                                    </p>
                                    <p className="card-footer-item">
      <span>
          <a href="#">Saiba mais</a>
      </span>
                                    </p>
                                </footer>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        )

}

export default Portfolio;