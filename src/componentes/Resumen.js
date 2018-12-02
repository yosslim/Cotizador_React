
//Componentes
import React, {Component} from 'react';

//Helpers
import {primeraMayuscula} from '../helper';

class Resumen extends Component{

    mostrarResumen = () => {
        //Destructuring
        const{marca, year, plan} = this.props.datos;

        if(!marca || !year || !plan) return null;
        
        return(
            <div className="resumen">
                <h2>Resumen de Cotizaciòn</h2>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                <li>Año del Auto: {primeraMayuscula(year)}</li>
            </div>
            
        )
    }

    render(){
        return(
        <div>
            { this.mostrarResumen() }
        </div>
        )        
    }
}

export default Resumen;