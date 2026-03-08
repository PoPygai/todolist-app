import React from 'react';
import {toodListBtnsAside, toolsBtnsAside} from "../utils/constans";
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
                <h4 className="aside-nav-todolist__title title-topic small-title">To-Do-List</h4>

                <button className="aside-nav-btn small-title"  onClick={(e)=>handleClick(e)} type="button">
                    <img className="aside-nav-btn__img" src="" alt="icon"/>
                    Add Task
                </button>

                <ul className="aside-nav-todolist list">
                    {
                        toodListBtnsAside.map((item) =>
                            <li className="aside-nav-todolist__item list-item" key={item.location}>
                                <Link
                                    className="aside-nav-todolist__link list-link"
                                    to={`/${item.location}`}
                                >
                                    <img className="aside-nav-todolist__img list-img" src="" alt="icon" />
                                    {item.title}
                                    <p className="aside-nav-todolist__count list-count">0</p>
                                </Link>
                            </li>
                        )
                    }
                </ul>


                <section className="aside-nav-tools">
                    <h4 className="aside-nav-tools__title title-topic small-title">Tools</h4>


                    <ul className="aside-nav-tools__title list">
                        {
                            toolsBtnsAside.map((item) =>
                                <li className="aside-nav-tools__item list-item" key={item.location}>
                                    <Link
                                        className="aside-nav-tools__link list-link"
                                        to={`/${item.location}`}
                                    >
                                        <img className="aside-nav-tools__img list-img" src="" alt="icon" />
                                        {item.title}
                                        <p className="avoid"></p>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </section>

            </nav>

        </aside>
    );
};

export default Aside;
