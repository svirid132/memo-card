<<<<<<< HEAD
import {Card} from "../index";
import {
    selectCards,
} from './fieldGameSlice';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import backgroundImage from "../../assets/background.jpg";
import { clickOnCard, clickOnField } from "./fieldGameSlice";

const FieldGame = () => {

    const cards = useSelector(selectCards);
    const dispatch = useDispatch();

    const cardElems = cards.map((card, index) => {
        return (<Card
            key = {card.id}
            {...card}
            name = {card.name}
            onClick = {(e) => {
                dispatch(clickOnCard(card.id));
                e.stopPropagation();
=======
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
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
            }}
        /> );
    });

<<<<<<< HEAD
    const handleClickField = (e) => {
        dispatch(clickOnField());
    }

    return (
        <div onClick={handleClickField}>
            <Wrapper>
                <WrapperInternal>
                    { cardElems }
                </WrapperInternal>
            </Wrapper>
=======
    return (
        <div className="field-game">
            <div className={clsx("field-game__wrapper-outher", viewDescription.isView ? "field-game__wrapper-outher--description" : null)}>
                <div className="field-game__wrapper-internal"> 
                    { cardElems }
                </div>
            </div>
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
        </div>
    );
};

<<<<<<< HEAD
const Wrapper = styled.div`
        overflow: hidden;
        @media(min-width: 1024px) {// Включительно [] всегда
            display: block;
            background-image: url(${backgroundImage});
            background-position: center center;
            background-size: cover;
            background-attachment: fixed;
            height: 100%;
        }
`
const WrapperInternal = styled.div`
    display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        width: 100%;
        max-width: 1024px;
        margin: 0 auto;

        background-color: orange;
        padding-right: 3rem;

        @media(min-width: 1024px) {
            border-radius: 10px;
            padding-right: 0rem;
        } 
`
=======
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
export default FieldGame
