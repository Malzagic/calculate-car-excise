import React, { useState } from "react";
import Calculate from '../hook/Calculate';

const Form = () => {
    const [select, setSelect] = useState('type1');
    const [cost, setCost] = useState(0);
    const [excise, setExcise] = useState(0);
    
    const handleCost = (e) => {
        setCost(e.target.value);
    }

    const handleSelectOption = (e) => {
        setSelect(e.target.value);
    }

    const submitHandler = (e) => {
        setExcise(Calculate(cost, select));
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col w-50 border border-slate-200 mt-4 p-8 rounded bg-slate-200">
            <div className="flex flex-col h-20">
                <label className="mb-2" htmlFor="number">Wartość Pojazdu w PLN</label>
                <input onChange={handleCost} className="border rounded p-1" type="number" min={1} value={cost}/>
            </div>
            <div className="flex flex-col h-20">
                <label className="mb-2" htmlFor="type-option">Rodzaj pojazdu</label>
                <select
                    value={select}
                    onChange={handleSelectOption}
                    className="border rounded p-1"
                    name="type-option"
                    id="type-option"
                >
                    <option defaultValue={"type1"}>Auto osobowe (do 2000ccm)</option>
                    <option value="type2">Auto osobowe (powyżej 2000ccm)</option>
                    <option value="type3">Auto osobowe (klasycznych hybryda od 2000ccm do 3500ccm)</option>
                    <option value="type4">Auto osobowe (hybryda plug-in)</option>
                    <option value="type5">Auto osobowe (klasycznych hybryda do 2000ccm)</option>
                </select>
            </div>
            <div className="flex flex-col h-20">
                <label className="mb-2" htmlFor="number">Akcyza</label>
                <input className="border rounded p-1 bg-slate-100" type="text" disabled value={excise + ' PLN'}/>
            </div>
            <div className="flex flex-col h-20">
                <input className="bg-blue-500 hover:bg-blue-700 text-white rounded p-2" type="submit" value="Zatwierdź" />
            </div>
        </form>
    )
}

export default Form;