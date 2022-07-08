import React,{useState} from 'react';
import Error from './Error';
import {AiOutlineSearch} from 'react-icons/ai'
const Formulario = ({guardarBusqueda}) => {

    const [termino,guardarTermino] = useState('');
    const [error,guardarError] = useState(false);
    const buscarImagenes = e =>{
        e.preventDefault();
        //validar
        if(termino.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //enviar termino de busqueda hacia el componente principal
        guardarBusqueda(termino)

    }
    return ( 
        <form
            onSubmit={buscarImagenes}
        >
            <div className="form">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Buscar una imagen. Ejemplo: cafe, futbol, etc..."
                        onChange={ e => guardarTermino(e.target.value)}
                    />
                    <button className='btn-search' type='submit'>
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>
            {error ? <Error mensaje="Agregar un termino de busqueda" /> : null}
        </form>
     );
}
 
export default Formulario;