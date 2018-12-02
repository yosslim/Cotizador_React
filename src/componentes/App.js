import React, { Component } from 'react';

//Componentes
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import Resultado from './Resultado';

//Helpers -- nos ayudan a no tener todo revuelto

import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

class App extends Component {

  //Podemos dejar el constructor o simplemente poner:
  // state ={.....} 

  //El state es para que solo se acualicen esos valores
  // y no se renderice otra vez la pagina

  constructor(props){ 
    super(props);
    this.state = {   //Vacios por default
      resultado:'',
      datos:{}
    }

  }

  cotizarSeguro = (datos) => {
    const {marca, plan, year} = datos;

    //Agregar una base de 2000
    let resultado = 2000;

    //Obtener la diferencia de años y
    const diferencia = obtenerDiferenciaAnio(year);

    //por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;

    //Americano 15% Asiatico 5% y Europeo 30% de 
    //incremento al valor actual

    resultado = calcularMarca(marca) * resultado;

    //el plan del auto, el basico incrementa el valor 20% y el de cobertura
    //completa 50%

    let incrementoPlan = obtenerPlan(plan);

    // dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    //crear objeto para el resumen
    const datosAuto = {
      marca : marca,
      plan : plan,
      year : year
    }

    //ya tenemos el costo... este el el resumen de lo que el usuario selecciono
    // y solo se actualizan estos datos, no toda la pagina

    this.setState({
      resultado : resultado,
      datos : datosAuto
    })
  }

  render() {
    return (
      <div className="contenedor">
       <Header
         titulo='Cotizador de seguro de Auto'
         />
        <div className="contenedor-formulario">
          <Formulario
           cotizarSeguro = {this.cotizarSeguro}  //Este prop llegara a fomulario y de regreso recibira los datos
          />
          <Resumen            
            datos = {this.state.datos}
          />
          <Resultado
            resultado = {this.state.resultado}          
          />
        </div>
      </div>
      
    );
  }
}

export default App;

// Para darle animacion a react
//npm install --save-dev react-transition-goup

