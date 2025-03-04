import './App.css'
// import usePokemonList from './hooks/usePokemonList'
// import usePokemonDetails from './hooks/usePokemonDetail'
import Pokemon from './components/Pokemon Card'

function App() {
  // Use the custom hook to fetch pokemon list
  // Example below
  // const list = usePokemonList();
  // const detail = usePokemonDetails("bulbasaur");

  return (
    <div className='w-80 bg-slate-900'>
      {/* Start the development here */}
      {/* Use react-router-dom Expected routes:  */}
      {/* 1. Home path: "/" */}
      {/* 1. Details path: "/details:" */}

      <Pokemon></Pokemon>

    </div>
  )
}

export default App
