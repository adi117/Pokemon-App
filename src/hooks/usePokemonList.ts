import { useContext } from "react";
import PokemonContext from "../context/PokemonContext";

const usePokemonList = () => {
<<<<<<< HEAD
  const context = useContext(PokemonContext);
  if (context === undefined) {
    throw new Error('usePokemonList must be used within a PokemonProvider');
  }
  return context;
=======
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon.');
        }
        const data = await response.json();
        console.log(data);
        setPokemonList(data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonList();
  }, []);

  return { pokemonList, loading, error };
>>>>>>> feat/start-point
};

export default usePokemonList;