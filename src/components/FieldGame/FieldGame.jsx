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
            }}
        /> );
    });

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
        </div>
    );
};

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
export default FieldGame
