import React from "react";
import "./footer.css";

const Footer = () => {
  return(
    <>
      <div className={"containerFooter"}>
        <div>
          <img src={"https://www.medicauruguaya.com.uy/images/logo_blanco21.png"}/>
        </div>

        <div className={"footerLinksContainer"}>
          <a href={"#"} className={"footerLinks"}>Trabajar en Médica Uruguaya</a>
          <a href={"#"} className={"footerLinks"}>Llamados vigentes</a>

        </div>
          <p className={"paragraphFooter"}>Médica Uruguaya Corporación de Asistencia Médica ©</p>
        <div>

        </div>
      </div>
    </>
  )
}

export default Footer;