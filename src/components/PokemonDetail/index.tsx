import { FC, useState } from "react";
import usePokemonList from "../../hooks/usePokemonList";
import PokemonCard from "../PokemonCard";
import GridFilter from "../Grid Filter";
import SortFilter from "../Sort Menu";


const PokemonDetail: FC = () => {

    const [grid, setGrid] = useState("single");
    const { pokemonList } = usePokemonList();

    return (
        <div className="flex-col justify-center items-center">
            <div className="flex w-full gap-6 px-6 py-3">
                <SortFilter></SortFilter>
                <GridFilter setGrid={setGrid} grid={grid}/>
            </div>
            <div className="flex flex-wrap gap-4 mx-6">
                {pokemonList.map((pokemon) => (
                    <PokemonCard pokemonName={pokemon.name} key={pokemon.name} grid={grid}/>
                ))}
            </div>
        </div>
    );
};

export default PokemonDetail;