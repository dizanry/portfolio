import React from 'react';
import './style.css';
import img1 from '../../assets/heroimg.png';
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cards() {
    return(
        <div className='Cards container'>
            <div className='columns is-centered'>
                <div className='column is-full-widescreen'>

                    <h1 className='title is-2 has-text-centered'>
                       <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon> Quem sou eu?</h1>
                </div>
            </div>

        </div>
    )
}

export default Cards;