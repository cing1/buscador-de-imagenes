import React,{useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import Listadoimagenes from './components/Listadoimagenes';
import Footer from './components/Footer'
import './App.css';

function App() {
  const [busqueda,guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactua,guargarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalpaginas] = useState(1);
  ///state
  useEffect(() => {
    const consultarAPI = async () => {
      if(busqueda === '') return;
        const imagenesPorPagina = 50;
        const key = '16713189-7aa606c51c73355eca7dd4b9a';
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactua}`
        console.log(url);
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarImagenes(resultado.hits);
        //calcular el total de paginas
        const calcularTotalPaingas = Math.ceil(resultado.totalHits / imagenesPorPagina);
        guardarTotalpaginas(calcularTotalPaingas);

        //mover la pantalla al inicio
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({behavior: 'smooth'});
    } 
    consultarAPI();
  },[busqueda,paginaactua])

  //definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactua -1;
    if(nuevaPaginaActual === 0) return;
    guargarPaginaActual(nuevaPaginaActual);
  }
  
  
  //definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactua +1;
    if(nuevaPaginaActual > totalpaginas) return;
    guargarPaginaActual(nuevaPaginaActual);
  }

  return (
   <div className="container">
      <div className="jumbotron">
        <p className="lead">Buscador de Imágenes</p>
        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div className=''>
        <Listadoimagenes  
          imagenes = {imagenes}
        />
        <div className='pag'>
        {(paginaactua === 1) ? null:(
            <button 
              type='button'
              className='btn-pag'
              onClick={paginaAnterior}
            >&laquo; Anterior </button>
        )}
        
        {(paginaactua === totalpaginas ? null :(
          <button 
          type='button'
          className='btn-pag'
          onClick={paginaSiguiente}
        >Siguiente &raquo;</button>
      
        ))}
        </div>

      </div>
      <Footer />
   </div>
  );
}

export default App;
