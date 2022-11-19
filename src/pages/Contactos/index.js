import React from "react";
import withHeader from "../../hocs/withHeader";
import "./contactos.css";
import Footer from "../../components/Footer";
const  Contactos= () => {
  return(
    <>
      <img src={"https://www.medicauruguaya.com.uy/imgnoticias/201612/W1901_H460/43.jpg"}/>
      <div className={"contactContainer"}>
        <div>
        <h2 className={"contactTitle"}>CONTACTO</h2>
        <p className={"contactParagraph"}>Comuníquese mediante las distintas vías de contacto, nuestro personal está a su disposición para evacuarle las<br/> distintas dudas o consultas que le surjan sobre nuestros servicios.</p>
        </div>
        <div>
          <h5 className={"contactTitleSede"}>SEDE CENTRAL</h5>
          <p>Dirección: Av. 8 de Octubre 2492, Montevideo.<br/>Teléfono:  (+598) 2487 0525</p>

        </div>
        <div>
          <h5 className={"contactTitleSede"}>ACCESOS</h5>
          <p>Principal - Av. 8 de Octubre 2492<br/>Emergencia – Av. Italia entre Pte. Berro y Avelino Miranda (Nº de puerta 9).</p>

        </div>
      </div>
      <Footer/>

    </>
  )
}

export default withHeader (Contactos);