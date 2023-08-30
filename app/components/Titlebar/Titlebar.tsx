import React from "react";
import { Moon } from "@phosphor-icons/react";

const Titlebar: React.FunctionComponent = () => {
    return (
        <div className="flex w-full h-6 px-12 py-12 justify-between items-center text-gray-800 dark:text-white">
            <p className="text-2xl font-bold">
                Marques.
            </p>
            <div>
                <div className="flex gap-4 items-center">
                    <Moon className="bg-gray-300 dark:bg-gray-700 rounded-lg duration-300 ease-in-out transition-all hover:inner-border-2 hover:inner-border-blue-500 hover:shadow-xl hover:shadow-blue-500 p-2" size={42} />
                </div>
            </div>
        </div>
    )
}
export default Titlebar;