import React from "react";

const Footer = () => {
    const date = new Date;
    const todayYear = date.getFullYear();

    return (
        <footer>
            <div className="text-black bg-sky-500/100">
                <p className="text-white text-center text-2xl p-5">&copy; {todayYear} kalkulator akcyzy na samochód by malzagic</p>
            </div>
        </footer>
    )
}

export default Footer;