import React from "react";
import "./clave.css";
import {NavLink} from "react-router-dom";
import Footer from "../../components/Footer";

const Clave = () => {
    return(
        <>
            <div className={"containerClave"}>
                <NavLink to={"/"}>
                <img className={"claveImage"} src={"https://www.medicauruguaya.com.uy/socios//images/logo@2.png"} width={"230px"} height={"70px"}/>
                </NavLink>
              <p className={"claveParagraph"}>La salud de tu vida</p>
            </div>
            <div className={"containerGrey"}>
            <div className={"containerForm"}>
                <div className={"containerFormClave"}>
                   <p className={"formParagraphClave"}>Recordar clave</p>
                   <form>
                      <div className={"containerInputButtonClave"}>
                          <input placeholder={"Usuario (cédula)"} type={"password"} className={"passwordInputClave"}/>
                          <button className={"buttonFormClave"}>Recordar</button>
                      </div>
                   </form>
                </div>
          </div>
            </div>
          <Footer/>
        </>
    )
}

export default Clave