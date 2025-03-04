import { FC } from "react";
import usePokemonList from "../../hooks/usePokemonList";
import PokemonDetail from "../PokemonDetail";


const Pokemon : FC = () => {

const {pokemonList} = usePokemonList();

    return (
        <div className="flex flex-col gap-4">
            
            {pokemonList.map((pokemon) => (
                <PokemonDetail pokemonName={pokemon.name}/>
            ))}
        </div>
    );
};

export default Pokemon;