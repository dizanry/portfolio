import React from 'react';
import './style.css';
import img1 from '../../assets/img1.png';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Ads() {
return  (
    <div className="Ads container">
        <div className="columns ">
            <div className="column is-half">
                <h1 className="title is-2 has-text-centered">Criação de Sites Profissionais</h1>
                <h2 className="subtitle is-5 is-bold has-text-centered"><p>Você não possui um site ou está desatualizado ou antigo?</p></h2>

                    <h2 className="subtitle is-5 has-text-left">
                        <p>Projetos de criação de sites profissionais,
                        conteúdo gerenciável e arquitetura de indexação
                        direcionada aos padrões do Google. Um site para
                        chamar de meu. Focado na atração de usuários de
                        forma orgânica, potencializando ao máximo os
                        resultados que você pode obter com sua presença
                        online.</p>


                    </h2>
                <p className="has-text-left">
                    <button className="button is-white is-medium is-outlined">Entre em contato &nbsp;<FontAwesomeIcon size={"sm"} icon={faArrowRight}></FontAwesomeIcon></button>
                </p>
            </div>
            <div className="columns">
                <figure>
                    <img className='image has-ratio' src={img1}></img>
                </figure>

            </div>

        </div>
    </div>
);

}

export default Ads;