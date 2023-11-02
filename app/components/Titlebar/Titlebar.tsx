import React from "react";
import { Moon } from "@phosphor-icons/react";

const Titlebar: React.FunctionComponent = () => {
    return (
        <div className="flex w-full h-6 px-12 py-12 justify-between items-center text-gray-800 dark:text-white">
            <p className="text-2xl font-bold">
                Marques.
            </p>
            <div className="text-center flex flex-col w-fit">
                <div className="bg-gray-200 dark:bg-gray-500/20 rounded px-2 py-1 border border-white/20 text-gray-600 dark:text-white/80 duration-300 ease-in-out transition-all hover:inner-border-2 hover:inner-border-blue-500 hover:shadow hover:shadow-blue-500">
                    (っ◔◡◔)っ · Hannah · 12/02/22
                </div>
            </div>
        </div>
    )
}
export default Titlebar;