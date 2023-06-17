import React from "react";

const Footer = () => {
    const date = new Date;
    const todayYear = date.getFullYear();

    return (
        <footer className="flex">
            <div className="flex justify-center items-center text-black bg-sky-950 w-full">
                <p className="font-mono text-white text-center text-xl p-5">&copy; {todayYear} kalkulator akcyzy na samochód by malzagic</p>
            </div>
        </footer>
    )
}

export default Footer;