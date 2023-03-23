import { Link } from "react-router-dom";
import Header from "../Components/atoms/Header";
import Experiencia from "../Components/atoms/Experiencia";
import Estudios from "../Components/atoms/Estudios";
import Habilidades from "../Components/atoms/Habilidades";
import Footer from "../Components/atoms/Footer";

function Home(){
    return(
        <>
        <Header/>
        <Experiencia/>
        <Estudios/>
        <Habilidades/>
        <Footer/>
        </>
    )
}

export default Home;