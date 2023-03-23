import React from 'react';
import {data} from "../../../src/data/data"
import Logo from '../../assets/img/Yo.jfif'
import '../../assets/styles/Header.css'

function Header() {
    return ( 
        <>
        <div id="head">
            <div id='flex-img'>
                <img src={Logo} alt="Cristian" id="yo"/>
            </div>

             <div id="nombre">
                <h1>{data.personal.name} {data.personal.lastname}</h1>
                <h2>{data.personal.cargo}</h2>
            </div> 
            <div id="nomb">
                <h1></h1>
           </div>
        </div>
       </>
     );
}

export default Header;