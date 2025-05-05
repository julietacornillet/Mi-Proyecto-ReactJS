import { useState } from "react";

function Contador() {

    const [contador, setConatdor]=useState(0);

    return (
        <>
            {contador}
            <div><button onClick={()=>setConatdor(contador+1)} className="btn btn-success">Agreagar</button>
            <button onClick={()=>setConatdor(contador-1)} className="btn btn-danger">Quitar</button></div>
        </>
    );
}

export default Contador;