import React,{useContext} from 'react'        //importo useContext desde la libreria react
import { useParams } from 'react-router-dom'  // importo UseParams desde la libreria react-router-dom

import { Context } from '../store/appContext'; //importo Context para poder acceder a lo que se guarda en store

//zona de imagenes
  import CloneWars from '../../img/Clone_Wars.png'

const CharacterDetail = () => {
  
  const {store}=useContext(Context);  // destructurando Context para tener a la mano store 

  const params = useParams();         //traerme la parte dinamica de la ruta
  
  const {index} = params;            //me traigo el id dinamico que se envia a traves de la ruta url

  const character = store.character.find((char,id)=> {    //hago un find sobre la los characteres y me traigo el primer item que cumpla la condicion
    return id == index;             // retorno solo los caracteres con el id igual al de la ruta
  } )
  console.log(character);

  return (
      //impro el nombre del character''
    // <h1>{character?.name}</h1>   //? es para para esperar por el valor (como un await)
                                      
    <div className="container">
        <div className="row">
          <div className='col-12 col-md-6'>
            <img src={CloneWars} className="card-img-top" alt="..." />
            {/* // el ? es para decirle al componente que espere por el valor (como un await) */}

          </div>
          <div className='col-12 col-md-6 text-center'>
            <h1>{character?.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis voluptate laboriosam cupiditate deserunt doloremque praesentium, quisquam aliquid consequatur soluta odit animi sapiente similique quasi corporis dolorum facere ratione, facilis eveniet?
            </p>
          </div>
        </div>

        <div className="row border-top border-danger my-5 font-color text-center">
          <div className="col-2">
              <h5>Name</h5>
              {character?.name}
          </div>
          <div className="col-2">
              <h5>Birth</h5>
              {character?.birth_year}
          </div>
          <div className="col-2">
              <h5>Gernder</h5>
              {character?.gender}
          </div>
          <div className="col-2">
              <h5>Height</h5>
              {character?.height}
          </div>
          <div className="col-2">
              <h5>Skin Color</h5>
              {character?.skin_color}
          </div>
          <div className="col-2">
              <h5>Eye Color</h5>
              {character?.eye_color}
          </div>
        </div>

      </div>
  
    )                               
  
}

export default CharacterDetail