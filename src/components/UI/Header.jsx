import React from "react";

const Header = ({headerText}) => {
    return (
        <header className="flex">
            <div className="flex md:justify-start justify-center items-center text-black bg-sky-950 w-full">
                <h1 className="font-mono text-white text-center text-2xl p-5">{headerText}</h1>
            </div>
        </header>
    )
}


export default Header;