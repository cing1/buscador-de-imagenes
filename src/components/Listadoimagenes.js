import React from 'react';
import Imagen from './Imagen';
const Listadoimagenes = ({imagenes}) => {
    return ( 
        <div className="section-images">
            {imagenes.map(imagen => (
                <Imagen 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    );
}
 
export default Listadoimagenes;