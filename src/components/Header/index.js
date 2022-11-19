import React from "react";
import "./header.css";
import {NavLink} from "react-router-dom";


const Index = () => {
    return(
        <>
         <div className={"headerContainer"}>

            <div>
               <a href={"/"}> <img src={"https://www.medicauruguaya.com.uy/images/Logo50021.png"} width={"260px"}/> </a>

            </div>

            <div className={"headerContainerForm"}>

                <form>
                    <h5>Servicio Virtual de Médica Uruguaya</h5>
                    <div className={"headerContainerInputs"}>
                    <input className={"headerInputName"} type={"text"} placeholder={"cedula (solo números)"}/>

                    <input className={"headerInputPassword"} type={"password"} placeholder={"clave"}/>
                    <button className={"headerButton"}>Ingresar</button>
                    </div>
                    <div className={"HeaderLinks"}>
                        <NavLink to={"/clave"}>Olvido su clave?</NavLink>
                        <NavLink to={"/usuario"}>Solicitar usuario</NavLink>
                        <NavLink to={"/ayuda"}>Ayuda</NavLink>
                    </div>


                </form>




            </div>

            <div>

                <img src={"https://www.medicauruguaya.com.uy/images/tubo.png"}/>
                <img src={"https://www.medicauruguaya.com.uy/images/tel_centro_izq.png"}/>
                <img src={"https://www.medicauruguaya.com.uy/images/tel_urge.png"}/>

            </div>

         </div>
        </>
    )
}

export default Index