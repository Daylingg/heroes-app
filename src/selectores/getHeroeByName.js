import { heroes } from "../data/heroes"

export const getHeroeByName = (name='') => {

    name=name.toLowerCase()

    if(name.length===0) return []

    return heroes.filter(hero=>hero.superhero.toLowerCase().includes(name)) //regresa un arreglo con los heroes q tengan en su nombre incluido el name q se le pasa...

   //return heroes //muestra todos los heroes 

}
