import React from "react";
import Header from "../../components/Header";
import "./ayuda.css"

const Ayuda = () => {
    return(
        <>
          <Header/>
          <div className={"containerHelp"}>
            <div>
              <img src={"https://www.medicauruguaya.com.uy/imgnoticias/201706/113.png"} width={"900px"}/>
            </div>
            <div>
              <h3 className={"titleHelp"}>Para ingresar con tu usuario y contraseña debes:</h3>
              <p className={"paragraphHelp"}>ngresar tu cédula de identidad sin puntos ni guiones y sin el dígito verificador. Por ejemplo si tu CI es 1.234.567-8, tu usuario será "12345678".
                Ingresar en "Contraseña" la contraseña que hayas elegido al registrarte al Servicio.
                Presionar Ingresar.
              </p>
            </div>
          </div>
        </>
    )
}

export default Ayuda