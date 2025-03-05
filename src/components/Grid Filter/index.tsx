import { FC } from "react";
import {cn} from "../../utils/cn"
import singleCardIcon from "../../assets/single-card-layout.svg";
import doubleCardIcon from "../../assets/double-card-layout.svg";

interface GridFilterProps {
    setGrid: (grid: string) => void;
    grid: string;
}

const GridFilter : FC<GridFilterProps> = ({setGrid, grid}) => {

    return (
        <div className="flex bg-blue-950 w-fit rounded-lg pointer-events-auto">
            <button
            className={cn("p-3 border-r-2 border-blue-900 z-10 pointer-events-auto cursor-pointer rounded-l-lg", grid === "single" ? "bg-amber-300" : "bg-transparent")}
            onClick={() => setGrid('single')}
            >
                <img src={singleCardIcon} alt="" className="w-9"/>
            </button>
            <button
            className={cn("p-3 border-blue-900 z-10 pointer-events-auto cursor-pointer rounded-r-lg", grid === "double" ? "bg-amber-300" : "bg-transparent")}
            onClick={() => setGrid('double')}
            >
                <img src={doubleCardIcon} alt="" className="w-9"/>
            </button>
        </div>
    );
}

export default GridFilter;