import React from 'react';
import "./Creater.css"
import {MAX_VALUE_LENGTH, MAX_VALUE_SYMBOLS, MIN_VALUE_LENGTH, MIN_VALUE_SYMBOLS} from "../utils/constans";

//todo work with inputs


const Creator = () => {
    return (
        <div className="wrapper creator">
            <section className="creator-section creator-menu">
                <h3 className="title-topic">Password Information</h3>
                <form action="#" className="creator-info__form">
                    <label className={"creator-info__label"}>
                        Length :
                        <input className="creator-info__inp" type="number" name="length" step="1"   max={MAX_VALUE_LENGTH} min={MIN_VALUE_LENGTH}/>
                    </label>
                    <label className={"creator-info__label"}>
                        Numbers :
                        <input className="creator-info__checkbox" type="checkbox" name="numbers" step={1} max={MAX_VALUE_SYMBOLS} min={MIN_VALUE_SYMBOLS}/>
                    </label>
                    <label className={"creator-info__label"}>
                        UpperCase :
                        <input  className="creator-info__inp" type="number" name="uppercase"  />
                    </label>
                    <label className={"creator-info__label"}>
                        Symbols :
                        <input className="creator-info__checkbox" type="checkbox" name="symbols"  />
                    </label>

                </form>
            </section>
            <section className="creator-section creator-password">
                <h3 className="title-topic">Password Creator</h3>
                <div className="creator-password__main">
                    <h2 className="creator-password__title">Your Password :{} </h2>
                    <button className="creator-password__btn">Create</button>
                </div>
            </section>
            <section className="creator-section creator-cheked">
                <h3 className="title-topic">Password Checked</h3>

            </section>
        </div>
    );
};

export default Creator;
