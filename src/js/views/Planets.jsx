import React, { useContext } from 'react'  //importo useContext desde react para poder usar mi Contexto

import { useParams } from 'react-router-dom'  //importo params para poder usar el valor dinamico que se mande por la ruta

import { Context } from '../store/appContext'  //importo Context para poder acceder a mi sotre

import StarWarsBrand from '../../img/Clone_Wars.png'

const Planets = () => {

  const { store } = useContext(Context)  //destructuro context para sacar Store

  const params = useParams();    // guardo lo que se mande dinamicamente por la ruta y lo guardo en param

  const { index } = params;    //saco index desde params


  const planet = store.planets.find((plan, id) => {   //le hago un find a planets y retorno el primer planet que su id sea igual al id
    return id == index
  });

  return (

    <>
      <div className="container">
        <div className="row text-center">
          <div className='col-12 col-md-6'>
            <img src={StarWarsBrand} className="card-img-top" alt="..." />
            {/* // el ? es para decirle al componente que espere por el valor (como un await) */}

          </div>
          <div className='col-12 col-md-6'>
            <h1>{planet?.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis voluptate laboriosam cupiditate deserunt doloremque praesentium, quisquam aliquid consequatur soluta odit animi sapiente similique quasi corporis dolorum facere ratione, facilis eveniet?
            </p>
          </div>
        </div>

        <div className="row border-top border-danger my-5 font-color text-center ">
          <div className="col-2">
              <h5>Name</h5>
              {planet?.name}
          </div>
          <div className="col-2">
              <h5>Climate</h5>
              {planet?.climate}
          </div>
          <div className="col-2">
              <h5>Population</h5>
              {planet?.population}
          </div>
          <div className="col-2">
              <h5>Orbital Period</h5>
              {planet?.orbital_period}
          </div>
          <div className="col-2">
              <h5>Rotation Period</h5>
              {planet?.rotation_period}
          </div>
          <div className="col-2">
              <h5>Diameter</h5>
              {planet?.diameter}
          </div>
        </div>

      </div>
    </>

  )
}

export default Planets