import {data} from "../../data/data"
import Musica from "../../assets/img/musica.png"
import Viajar from "../../assets/img/viajar.png"
import Azar from "../../assets/img/rompecabezas.png"
import Programar from "../../assets/img/programacion.png"
import Dibujar from "../../assets/img/paleta-de-color.png"

function Footer() {
    return (    
        <>
        <div><center><p>Aficiones</p></center></div>
        <div className="footer">
            <div >
                <h1>{data.aficiones.af1}</h1>
                <div className="aficion"><img src={Musica} alt="escuchar musica" className="aficion" /></div>
            </div>
            <div><h1>{data.aficiones.af2}</h1>
                <div className="aficion"><img src={Viajar} alt="viajar" className="aficion" /></div>
            </div>
            <div><h1>{data.aficiones.af3}</h1>
                <div className="aficion"><img src={Programar} alt="programar" className="aficion" /></div>
            </div>
            <div><h1>{data.aficiones.af4}</h1>
                <div className="aficion"><img src={Azar} alt="juegos de azar" className="aficion" /></div>
            </div>
                <div><h1>{data.aficiones.af5}</h1><div className="aficion"><img src={Dibujar} alt="dibujar" className="aficion" /></div>
            </div>
        </div>
        </>
     );
}

export default Footer;