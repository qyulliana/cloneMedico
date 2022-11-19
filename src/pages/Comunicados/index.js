import React from "react";
import withHeader from "../../hocs/withHeader";

const Comunicados = () => {
  return(
    <>
      <div>
        <h2>A LOS SEÑORES AFILIADOS</h2>
        <p>Adjuntamos a continuación comunicados de su interés:</p>

        <h3>Documentos asociados:</h3>
        <p>Comunicado para usuarios .odt</p>
        <p>EMERGENCIA SANITARIA.pdf</p>
        <p>CONTROL DE TABAQUISMO.pdf</p>
        <p>CONSEJOS CONSULTIVOS.pdf</p>
        <p>COMUNICADO A LOS AFILIADOS DE CARNÉ DE SALUD DEL DEPORTISTA.pdf</p>
        <p>COMUNICADO A LOS SEÑORES AFILIADOS 19.09.pdf</p>

      </div>

    </>
  )
}

export default withHeader (Comunicados);