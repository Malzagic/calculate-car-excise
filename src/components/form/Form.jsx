import React from "react";

const Form = () => {
    return (
        <form className="flex flex-col w-50 border border-slate-200 mt-4 p-8 rounded bg-slate-200">
            <div className="flex flex-col h-20">
                <label className="mb-2" htmlFor="number">Wartość Pojazdu w PLN</label>
                <input className="border rounded p-1" type="number" min={1} />
            </div>
            <div className="flex flex-col h-20">
                <label className="mb-2" htmlFor="type-option">Rodzaj pojazdu</label>
                <select className="border rounded p-1" name="type-option" id="">
                    <option value="">Auto osobowe (do 2000ccm)</option>
                    <option value="">Auto osobowe (powyżej 2000ccm)</option>
                    <option value="">Auto osobowe (powyżej klasycznych hybryda)</option>
                </select>
            </div>
            <div className="flex flex-col h-20">
                <label className="mb-2" htmlFor="number">Akcyza</label>
                <input className="border rounded p-1 bg-slate-100" type="number" disabled defaultValue={0} />
            </div>
            <div className="flex flex-col h-20">
                <input className="bg-blue-500 hover:bg-blue-700 text-white rounded p-2" type="button" value="Zatwierdź" />
            </div>
        </form>
    )
}

export default Form;