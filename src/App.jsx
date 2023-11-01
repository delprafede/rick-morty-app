import { useState } from "react"
import imgRick from "../src/img/rick-morty.png"
import './App.css'
import Characters from "./Componentes/Characters"


function App() {

  const [characters, setCharacters] = useState(null)

  const restApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()

    setCharacters(characterApi.results)

  }


  return (
    <>
      <div className="container">
        <h1 className='title'>Rick and Morty</h1>

        {characters ? (<Characters characters={characters} setCharacters={setCharacters} />) :
          (<>
            <img src={imgRick} alt="rickandmorty" className="img-home" />
            
            <button onClick={restApi} className="btn-search">Buscando Personajes</button>
          </>)}

      </div>
    </>
  )
}

export default App
