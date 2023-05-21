import React from 'react'
import { HeroList } from '../heroe/HeroList'

export const MarvelSceen = () => {
  return (
    <div>
        <h1>MarvelSceen</h1>
        <hr/>
        <HeroList publisher={'Marvel Comics'} />
    </div>
  )
}
