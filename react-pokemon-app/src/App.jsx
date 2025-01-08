import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [pokemon, setPokemon] = useState({})
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1008&offset=0'

  useEffect(() => {
    // API => response => state update => component rerender => state
    fetchPokeData()
  }, [])

  const fetchPokeData = async () => {
    try {
      // const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      // const data = await response.json()
      // console.log(data)
      const response = await axios.get(url);
      console.log(response.data.results);
      setPokemon(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <h1 class="text-2xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
