import React from 'react'

import {PropTypes} from 'prop-types'      //importo protype
import Card from './Card.jsx'

const Carousel = ({items,title}) => {
  return (
    <>
    <h1 className='font-color'>{title}</h1>
    <div className="caruosel-container my-3">
        {items.map((item,index)=>{
            return <Card key={item.created} item={item} nature={title}  index={index}/>
        })}
    </div>
    </>
  )
}

Carousel.propTypes={                
    items: PropTypes.array,      //indico el tipo de prop que va a recibir
    title: PropTypes.string      //indico que el tipo de prop es un String
}

export default Carousel