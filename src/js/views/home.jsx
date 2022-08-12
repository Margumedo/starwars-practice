import React, { useState, useEffect, useContext } from "react"; //importo useContext de la libreria react
import "../../styles/home.css";

import { Context } from "../store/appContext"; 					//me traigo context del componente Context

//Zona de componentes
import Card  from "../component/Card.jsx"						//importo el componente card
import Carousel from "../component/Carousel.jsx";				//importo mi carousel

export const Home = () => {

	const { store } = useContext(Context);    //descructuro Context para sacar store 
	const { character, planets } = store;	 //destructuro store para extraer character y planete

	return (

		<>
			<div className="container" >
				<Carousel title={"Characters"} items={character} />
				<Carousel title={"Planets"} items={planets} />
			</div>

		</>

	);



}

