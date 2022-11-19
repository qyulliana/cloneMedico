import React from "react";
import "./usuario.css"
import withHeader from "../../hocs/withHeader";
import Footer from "../../components/Footer";

const Usuario = () => {
    return(
        <>
            <div className={"usuarioContainer"}>
                <h2 className={"usuarioTitle"}>BIENVENIDO AL SERVICIO VIRTUAL DE MÉDICA URUGUAYA</h2>
                <p className={"paragraphUsuario"}>Registrándote personalmente en Sede Central, el sitio de Médica Uruguaya te ofrece toda la información sobre tu agenda de citas médicas, historial de medicamentos, exámenes clínicos y recordatorios para tus citas médicas.
                </p>
              <div className={"usuarioContainerLinks"}>
                <a className={"usuarioLink"} href={"#"}>Procedimiento para registrarse y obtener usuario</a>
                <a className={"usuarioLink"} href={"#"}>Recordar contraseña</a>
                <a className={"usuarioLink"} href={"#"}>Servicios en línea</a>
                <a className={"usuarioLink"} href={"#"}>Uso de cookies</a>
              </div>
              <h6>Procedimiento para registrarse</h6>
              <p>1. Presentarse personalmente en la Oficina de Afiliaciones de Sede Central, de lunes a viernes de 8 a 20 horas con tu cédula de identidad y fotocopia de la misma.</p>
              <p>2. Allí se te solicitarán los siguientes datos personales: cédula de identidad, domicilio, teléfono, celular y correo electrónico.</p>
              <p>3. Una vez verificados tus datos e ingresando en nuestro sistema, se te enviará por correo electrónico un link que te permitirá ingresar una contraseña ingresada por tí en nuestro sitio web.</p>
              <p>4. Cumplidos los pasos previos, serás un usuario registrado de VIRTUAL, el servicio online de Médica Uruguaya, al que podrás ingresar con tu usuario y contraseña. </p>
              <p>Vas a encontrar un acceso en la parte superior de la página</p>
            </div>
          <Footer/>
        </>
    )
}

export default withHeader (Usuario);