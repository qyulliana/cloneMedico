import {Route, Routes} from "react-router-dom";
import './App.css';


import Inicio from "./pages/Inicio";
import Clave from "./pages/Clave";
import Usuario from "./pages/Usuario";
import Ayuda from "./pages/Ayuda";
import Agenda from "./pages/Agenda";
import Contactos from "./pages/Contactos";
import Comunicados from "./pages/Comunicados";


function App() {
    return (
        <Routes>
            <Route path={"/"} element={ <Inicio/> }/>
            <Route path={"/clave"} element={ <Clave/> }/>
            <Route path={"/usuario"} element={ <Usuario/> }/>
            <Route path={"/ayuda"} element={ <Ayuda/> }/>
            <Route path={"/agenda"} element={ <Agenda/> }/>
            <Route path={"/contacto"} element={ <Contactos/> }/>
            <Route path={"/comunicado"} element={ <Comunicados/> }/>
        </Routes>
    );
}

export default App;
