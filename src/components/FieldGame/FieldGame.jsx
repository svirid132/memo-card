import {Card, Status, Navigation} from "../index";
import {useEffect, useState, memo, useRef, useImperativeHandle, forwardRef} from "react";
import clsx from 'clsx'

const FieldGame = ({items, onMiddleClickForScore, onMiddleClickForDescription }) => {

    const [viewDescription, setViewDescription] = useState({isView: false});
    
    const cardElems = items.map((item, index) => {
        return (<Card 
            key = {index}
            className = "field-game__card"
            name = {item.id}
            image = {item.image}
            isViewFront = { item.isViewFront }
            isView = {item.isView}
            onClickForScore = {onMiddleClickForScore(index)}
            onClickForDescription = {() => {
                if (item.isViewFront && item.image) {
                    onMiddleClickForDescription({isView: true, name: item.name, description: item.description, imageUrl: item.image.url});
                }
            }}
        /> );
    });

    return (
        <div className="field-game">
            <div className={clsx("field-game__wrapper-outher", viewDescription.isView ? "field-game__wrapper-outher--description" : null)}>
                <div className="field-game__wrapper-internal"> 
                    { cardElems }
                </div>
            </div>
        </div>
    );
};

export default FieldGame
