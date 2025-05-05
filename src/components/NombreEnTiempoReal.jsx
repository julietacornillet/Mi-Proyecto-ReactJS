import { useState } from "react";


function NombreEnTiempoReal(){

    const [nombre, setNombre]=useState('');
    
    const manejarCambio=(e)=>{
        setNombre(e.target.value);
    };

    return(
        <div className="text-center mt-5">
            <p className="h5">¿Cuál es tu nombre?</p>
            <input type="text" placeholder="Tu nombre" value={nombre} onChange={manejarCambio}/>
            <p className="h4 mt-4">{!nombre ? '': 'Bienvenido '+nombre+ ' a mi blog'}</p>
        </div>
    );
}

export default NombreEnTiempoReal;
