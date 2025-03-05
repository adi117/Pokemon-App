import { FC } from "react";
import DropdownIcon from "@/assets/dropdown.svg"

const SortFilter: FC = () => {
    return (
        <button className="bg-blue-950 p-2 text-white flex justify-between items-center text-sm font-normal w-full rounded-lg">
            Sort By
            <img src={DropdownIcon} alt="" />
        </button>
    );
}

export default SortFilter;