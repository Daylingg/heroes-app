import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { getHeroeByName } from '../../selectores/getHeroeByName'
import { HeroCards } from '../heroe/HeroCards'
import queryString from 'query-string'


export const SearcScreen = () => {

  const navigate = useNavigate()
  const location = useLocation()

  //console.log(location.search) //se ve la cadena string q sal en el navegador..la parte de la query

  const {q=''}= queryString.parse(location.search)//el parse es para q lo separe...desestructuramos el query y obtenemos q, esa es la query q se manda y es donde se especifica el nombre del heroe...al inicio se manda vacio... q=''
  //const query= queryString.parse(location.search) //console.log(query)

  const [formValues, handleInputChange] = useForm({searchText: q})//el estado inicial es el searchtext q al inicio esta vacio

  const {searchText} = formValues //desestructuro del form el searchText para poder usarlo

  const heroesFillted = useMemo(() => getHeroeByName(q), [q]) //recuerda si ya se renderizo y solo cambia o se vuelve a renderizar si cambia el query
  const handleSearch = (e) => {
    e.preventDefault()
    console.log(searchText)
    navigate(`?q=${searchText}`)//pone en la barra de navegacion del navegador la query q se especifica
    
  }

  return (
    <div>
        <h1>Busquedas</h1>
        <hr/>

        <div className='row'>
          <div className='col-5'>
            <h4>Buscar</h4>
            <hr/>

            <form onSubmit={handleSearch}>
              <input 
                type='text'
                placeholder='Buscar un heroe'
                className='form-control'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={handleInputChange}
              />

              <button 
              className='btn btn-outline-primary mt-1'
              type='submit'
              
              >Buscar...</button>
            </form>
          </div>

          <div className='col-7'>
            <h4>Resultados</h4>
            <hr/>

            {
              (q==='') 
              ? <div className='alert alert-info'>Buscar un heroe</div>
              : (heroesFillted.length === 0) && <div className='alert alert-danger'>No hay resultados para: {q}</div>
            }

            {
              heroesFillted.map(hero =>
                <HeroCards 
                  key={hero.id} 
                  {...hero}/> //desestructuro todo de hero para q pasen como parametros en el componente
              )
            }
          </div>
        </div>
    </div>
  )
}
