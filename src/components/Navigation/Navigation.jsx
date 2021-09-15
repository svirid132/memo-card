import React, {forwardRef} from 'react'
import clsx from 'clsx'
import {
    Link
} from "react-router-dom";

const Navigation =  forwardRef(({currentPage, length, onClick}, ref) => {


    const items = new Array(length);
    items.fill(null);

    const itemElems = items.map((item, index) => {
        return (
            <li key={index} className={clsx("navigation__item",  currentPage === index + 1 ? "navigation__item--active" : null)} onClick={() => onClick(index + 1)}>
                <Link to={`/game/${index + 1}`}>{index + 1}</Link>
            </li>
        );
    });

    return (
        <div className={clsx("navigation")} ref={ref}>
            <div className="navigation__wrapper">
                <h2 className="navigation__title">Перейти</h2>
                <ul className="navigation__navigation">
                    { itemElems }
                </ul>
            </div>
        </div>
    )
})

export default Navigation
