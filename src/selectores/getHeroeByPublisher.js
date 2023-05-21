import { heroes } from "../data/heroes"

export const getHeroeByPublisher = (publisher) => {

    const validPublisher= ['Marvel Comics','DC Comics']//creo una constante con los tipos de publisher q estan en la bd

    if(!validPublisher.includes(publisher)){//si no incluye el publisher q tengo lanzo un error
        throw new Error( `${publisher} is not a valid publisher`)
    }

    return heroes.filter(hero =>hero.publisher===publisher)

}

//esta funcion recibe los heroes y lo q hace es devolver el heroe q coincida con el publisher q se le pasa mediante el metodo filter para filtrar