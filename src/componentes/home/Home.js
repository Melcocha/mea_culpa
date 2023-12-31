
import React from 'react';

import Menu from '../menu/Menu'; // Componente Menú (Lo he creado en la Parte 1 de este Tutorial) 
import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';
import Footer from '../footer/Footer'; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial) 


class Home extends React.Component {

	render() {

		return(

			<>

			<Menu /> 

			<main role="main" className="flex-shrink-0 mt-5">

		            <div className="container">
		  	  		
		  	        <Slider /> // Componente Slider (Lo crearé a continuación) 
		  	        <Servicios /> // Componente Servicios (Lo crearé a continuación) 

		  	        <hr className="featurette-divider" />

		            </div>

	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Home;
