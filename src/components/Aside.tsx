import React from 'react';
import {btnsAside} from "../utils/constans";
import "./Aside.css"
import { Link } from "react-router-dom"

type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Aside:React.FC<Props> = ({setIsOpen}) => {

    // todo  make class for active btn
    // todo  when it call we need get where this task will (in today or all)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsOpen(true);
    }

    return (
        <aside className="aside">
            <nav className="aside-nav">

                <button className="aside-nav-btn" onClick={(e)=>handleClick(e)} type="button">
                    <img className="aside-nav-btn__img" src="" alt="icon"/>
                    Add Task
                </button>

                <ul className="aside-nav__list">
                    {
                        btnsAside.map((item) =>
                            <li className="aside-nav__item" key={item.location}>
                                <Link
                                    className="aside-nav__link"
                                    to={`/${item.location}`}
                                >
                                    <img className="aside-nav__img" src="" alt="icon" />
                                    {item.title}
                                    <p className="aside-nav__count">0</p>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>

        </aside>
    );
};

export default Aside;
