import {data} from "../../../src/data/data"
import Uni from '../../assets/img/uni.jpg'

function Estudios() {
    return ( 
        <div className='cuad'>
            <div className='color'>
                <p>Estudios</p>
                <h1>* {data.estudios.institucion1}</h1>
                <h1>* {data.estudios.institucion2}</h1>
                <h1>* {data.estudios.institucion3}</h1>
                <h1>* {data.estudios.institucion4}</h1>
                <h1>* {data.estudios.institucion5}</h1>
            </div>

            <div className='cuad'>
              <img src={Uni} alt="Universidad" id="uni" />
            </div>
            
            <div className='color'>
              <p>Idiomas</p>
              <h1>* {data.languages.Español}</h1>
              <h1>* {data.languages.Ingles}</h1>
            </div>
        </div>
     );
}

export default Estudios;