import React from 'react'
import { Link } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages'

//const heroImages= require.context('../../assets',true) //para acceder a las img q estan en el src, el segundo argumento(true) es para q busque en subdirectorios

export const HeroCards = ({id,superhero, publisher, alter_ego, first_appearance, characters}) => {//se pasan como props desestructuradas los datos de la bd

    //const imgPath=`/assets/${id}.jpg`
    const imgPath= heroImages(`./${id}.jpg`)

  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4'>
                    <img src={imgPath} className='card-img' alt={superhero} />
                </div>
                
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>

                        <p className='card-text'>{alter_ego}</p>

                        {
                            (alter_ego!==characters) 
                                && <p className='text-muted'>{characters}</p>
                        }{/*solosi los personajes son diferentes al alter ego entonces q muestre los personajes*/}

                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>

                        <Link to={`/heroe/${id}`}>Mas...</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
