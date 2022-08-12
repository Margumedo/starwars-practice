import React, { useContext } from "react";           //importo useContext desde react para poder usar mi Context que tiene adentro Store
import { Link } from "react-router-dom";		  //importo Link de la libreria reac-router-dom para poder 

import { Context } from '../store/appContext.js'    //importo Context para poder deconstruirlo y sacar Store, favorites y todo lo que tenga Store
import StarWarCWBrand from '../../img/SWCW_logo_black.png'
export const Navbar = () => {					//exporto de forma declarada mi navbar


	const { store, actions } = useContext(Context);			//destructuro mi Conte

	return (

		<nav id="navbar-example2" className="navbar bg-light px-3 mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="navbar-brand-image" src={StarWarCWBrand} alt="Imagen Clone Wars" />
				</span>
			</Link>
			<ul className="nav nav-pills">
				<li className="nav-item dropdown">
					<Link
						to="/"
						className="nav-link dropdown-toggle"
						data-bs-toggle="dropdown"
						href="#"
						role="button"
						aria-expanded="false"
					>
						{/*coloco la cantidad de favoritos que llevo */}
						Favorite {store.favorites.length}
					</Link>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length <= 0 ?   //vamos a verificar si hay algo en favoritos con un ternario porque es JSX
							<li>
								<a className="dropdown-item text-center" href="#">(empety)</a>
							</li> :						//en caso de haber algo guardado en favorites voy a hacerle un map
							store.favorites.map((item) => {  // hago map sobre store.favorites
								return (
									//el key de mi map va a ser created porque no tenemos id
									<li key={item.created} >
										<div className="d-flex justify-content-between">
											<div>
												<a className="dropdown-item" href="#">{item.name}</a>
											</div>
											<div>
												<button type='button'> 
													<i 
														className="bi bi-trash-fill" onClick={() => { actions.deleteFavorites(item.created) }}>
													</i> 
												</button>
											</div>
										</div>
									</li>);
							})
						}
					</ul>
				</li>
			</ul>
		</nav>

	);
};
