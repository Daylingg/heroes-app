import { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages'
import { getHeroeById } from '../../selectores/getHeroeById'


//const heroImages= require.context('../../assets',true) //para acceder a las img q estan en el src, el segundo argumento(true) es para q busque en subdirectorios


export const HeroeScreen = () => {

  const {heroeId}= useParams()//desestructuramos el useParams para obtener el id q viene en la ruta
  //const params= useParams() //al hacer un console.log de params vemos lo q trae, en este caso tiene el heroeId q obtiene en la ruta url
 //console.log(params)
 const navigate=useNavigate()

  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId])//el use memo me permite memorizar valores y solo si la dependencia cambia se vuelve a memorizar el valor

  const handleReturn = () => {
    navigate(-1) //de esta manera le decimos q vire a la pag anterior

  }

  if(!heroe) return <Navigate to='/'/> //si no encuentra la ruta segu el id se redirecciona a marveldc q es lo q esta en /

  const {id, superhero, publisher, alter_ego, first_appearance, characters}=heroe //se desestructura para evitar poner heroe.id etc

  //const imgPath=`/assets/${id}.jpg` //esta es la forma de traer la imagen cuando la carpeta assetsestaba en la carpeta public
  const imgPath= heroImages(`./${id}.jpg`)

  return (
    <div className='row mt-5'>
       {/* <h1>HeroeScreen</h1>
        <p></p>*/}
        <div className='col-4'>
          <img 
          src={imgPath}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft' />
        </div>
        <div className='col-8 animate__animated animate__fadeIn'>
          <h3>{superhero}</h3>
          <ul className='list-group '>
            <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
            <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
            <li className='list-group-item'><b>First Appearance: </b>{first_appearance}</li>
          </ul>

          <h5 className='mt-5'>Characters</h5>
          <p>{characters}</p>

          <button className='btn btn-outline-info'
          onClick={handleReturn}>Regresar</button>
        </div>
    </div>
  )
}
