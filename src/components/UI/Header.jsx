import React from "react";

const Header = ({headerText}) => {
    return (
        <header>
            <div className="text-black bg-sky-500/100">
                <h1 className="text-white text-2xl p-5">{headerText}</h1>
            </div>
        </header>
    )
}


export default Header;