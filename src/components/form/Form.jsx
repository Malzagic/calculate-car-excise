import React from "react";

const Form = () => {
    return (
        <form className="p-8 bg-slate-200">
            <label>Wartość Pojazdu w PLN</label>
            <input type="number" />
            <label>Rodzaj pojazdu</label>
            <select name="" id="">
                <option value="">Auto osobowe (do 2000ccm)</option>
                <option value="">Auto osobowe (powyżej 2000ccm)</option>
                <option value="">Auto osobowe (powyżej klasycznych hybryda)</option>
            </select>
            <label htmlFor="">Akcyza</label>
        </form>
    )
}

export default Form;