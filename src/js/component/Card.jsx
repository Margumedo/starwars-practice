import React, { useContext } from 'react'
import { Context } from '../store/appContext.js';
import PropTypes from "prop-types"

import { Link, useParams } from 'react-router-dom'

import CloneWars from "../../img/Clone_Wars.png"

function Card({ item, nature, index }) {

    const { store, actions } = useContext(Context)

    let params = useParams();

    const { character_id } = params

    return (
        <div className="col-12 col-md-4">
            <div className="card my-3" >
                <img src={CloneWars} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {nature === 'Characters' ?
                        (<>
                            <p className="card-text"><span className="card-text fw-bold">Hair-color: </span>{item.hair_color}</p>
                            <p className="card-text"><span className="card-text fw-bold">eye-color: </span> {item.eye_color}</p>
                            <p className="card-text"><span className="card-text fw-bold">Gender: </span>{item.gender}</p>
                            <div className='d-flex justify-content-between'>
                                    <div>
                                        <Link to={`/character/${index}`} className="btn btn-primary">
                                            Learn more!
                                        </Link>
                                    </div>
                                    <div>
                                        <button className='btn btn-outline-warning' type='button' onClick={() => { actions.addFavorites(item.created) }}> <i className="bi bi-heart"></i></button>
                                    </div>
                                </div>
                        </>
                        ) : (
                            <>
                                <p className="card-text"><span className="card-text fw-bold">Population: </span>{item.population}</p>
                                <p className="card-text"><span className="card-text fw-bold">Terrain: </span> {item.terrain}</p>
                                <p className="card-text"><span className="card-text fw-bold">Diameter: </span>{item.diameter}</p>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <Link to={`/planets/${index}`} className="btn btn-primary">
                                            Learn more!
                                        </Link>
                                    </div>
                                    <div>
                                        <button  className='btn btn-outline-warning' type='button' onClick={() => { actions.addFavorites(item.created) }}> <i className="bi bi-heart"></i> </button>
                                    </div>
                                </div>
                            </>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    item: PropTypes.object,
    nature: PropTypes.string,
    index: PropTypes.number,
}

export default Card