import { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selectores/getHeroeByPublisher'
import { HeroCards } from './HeroCards'

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]) //memoriza los valores mejorando el rendimiento y solo cambia cuando cambia el publisher

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
        {/*<h1>Hero List - {publisher}</h1>*/}
       
            {
                heroes.map(hero=>(
                    <HeroCards key={hero.id}
                   
                      {...hero}
                    />))
            }
            
        
    </div>
  )
}
 /**
 decir {...hero} es lo mismo q pasar las propiedades de esta manera

 id={hero.id}
superhero={hero.superhero}
publisher={hero.publisher}
alter_ego={hero.alter_ego}
first_appearance={hero.first_appearance}
characters={hero.characters} */