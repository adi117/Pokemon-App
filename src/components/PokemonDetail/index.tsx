import { FC } from "react";
import usePokemonDetails from "../../hooks/usePokemonDetail";


interface PokemonDetailProps{
    pokemonName : string;
}

const PokemonDetail : FC<PokemonDetailProps> = ({pokemonName}) => {

    const {pokemonDetails} = usePokemonDetails(pokemonName);

    return (
        <div className="capitalize flex flex-col justify-center items-center p-3 bg-white rounded-lg mx-5">
            <div className="flex w-full justify-between">
                <p className="text-base font-bold text-green-500">{pokemonDetails?.types}</p>
                <p className="text-base font-bold">{pokemonDetails?.id}</p>
            </div>
            <img src={pokemonDetails?.artworkFront} alt="" className="w-44"/>
            <p className="text-lg font-bold text-blue-900">{pokemonDetails?.name}</p>
        </div>
    );
};

export default PokemonDetail;