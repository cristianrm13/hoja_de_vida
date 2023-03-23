import {data} from "../../../src/data/data"
import Java from "../../assets/img/java-4.svg"
import Javascr from "../../assets/img/logo-javascript.svg"
import TEquipo from "../../assets/img/unido.png"
import Doc from "../../assets/img/contrato.png"

function Habilidades() {
    return ( 
        <>
        <div><center><p>Habilidades</p></center></div>
        <div className="habilidad">
            <div className="habil">
                <div className="imgHab">
                    <img src={Java} alt="java"className="imgHab" />
                </div>
                <h1>{data.habilidades.habil1}</h1></div>
            <div className="habil">
                <div className="imgHab">
                    <img src={Javascr} alt="javascript" className="imgHab"/>
                </div>
                <h1>{data.habilidades.habil2}</h1></div>
            <div className="habil">
                <div className="imgHab">
                    <img src={TEquipo} alt="Trabajo_en_quipo" className="imgHab"/>
                </div>
                <h1>{data.habilidades.habil3}</h1></div>
            <div className="habil">
                <div className="imgHab">
                    <img src={Doc} alt="Documentacion" className="imgHab"/>
                </div>
                <h1>{data.habilidades.habil4}</h1></div>
        </div>
        </>
     );
}

export default Habilidades;