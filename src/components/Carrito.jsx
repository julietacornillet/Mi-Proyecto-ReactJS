

function Carrito ({carritoItems}) {

    return (
        <>
            {carritoItems.length === 0 ? '0' : 
                <ul>                    
                    {carritoItems.map((item, idx) =>(<li key={idx}>{item.titulo}</li>))}                    
                </ul>
            }
        </>
    );
}

export default Carrito;