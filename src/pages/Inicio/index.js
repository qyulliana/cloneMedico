import React from "react";
import withHeader from "../../hocs/withHeader";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import Footer from "../../components/Footer";

const Inicio = () => {
    return(
        <>
            <Navbar/>
            <Slider/>
            <Footer/>


        </>
    )
}

export default withHeader(Inicio);