<<<<<<< HEAD
import {memo} from 'react'
import Front, {FRONT_STATE} from "./Front";
import Back from './Back';
import styled from 'styled-components'

export const CARD_STATE = {
    FRONT: "FRONT",
    BACK: "BACK",
    HIDDEN: "HIDDEN",
}

const Card = ({image, name, onClick, state}) => {

    let viewBack = null;
    let stateFront = null; 
    let viewCursor = true;
    switch (state) {
        case CARD_STATE.FRONT: {
            viewBack = false;
            stateFront = FRONT_STATE.VIEW;
            break;
        }
        case CARD_STATE.BACK: {
            viewBack = true;
            stateFront = FRONT_STATE.UNVIEW;
            break;
        }
        case CARD_STATE.HIDDEN: {
            viewBack = false;
            stateFront = FRONT_STATE.HIDDEN;
            viewCursor = false
            break;
        }
        default: {}
    }

    return (
    <div>
        <Wrapper viewCursor = {viewCursor} onClick = {(e) => onClick(e)}>
            <BackStyled view = {viewBack}/>
            <FrontStyled image = {image} name={name} state = {stateFront}/>
        </Wrapper>
    </div>
    )
};

const BackStyled = styled(Back)`
    position: absolute;
`

const FrontStyled = styled(Front)`
    position: absolute;
`

const Wrapper = styled.div`
    cursor: ${props => props.viewCursor ? "pointer": "default"};
    position: relative;
    margin-top: 2rem; 
    margin-bottom: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    width: 20rem;   
    height: 30rem;
`

export default memo(Card);
=======
import {useEffect, useState, useRef, memo, forwardRef, useImperativeHandle} from 'react'
import clsx from 'clsx'
import cardBackground from "../../assets/card.jpg"
import PropTypes from 'prop-types';
import CardLoader from './CardLoader'
import { CSSTransition } from 'react-transition-group';

const Card = forwardRef(({className, name, image, isErrorImage, isView, isViewFront, onClickForScore, onClickForDescription}, ref) => {

    const dataPositonForImg = image.width < image.height ? "horizontal" : "vertical";

    const [isImageError, setIsImgError] = useState(false);
    const [isLoad, setIsLoad] = useState(true);
    const [isClickable, setIsClickable] = useState(true)

    useEffect(() => { 
        if(isErrorImage) {
            setIsLoad(false);
            setIsImgError(true);
        }
    }, [isErrorImage]);

    const settingLoadImg = (elem) => {
        if (!elem || elem.src === image.url) return;
        elem.src = image.url;
        elem.onload = () => {
            setIsLoad(false);
        }
        elem.onerror = () => { 
            setIsLoad(false);
            setIsImgError(true); 
        };
    };

    const cardRef = useRef();

    return (
    <div className={clsx("card", className)} ref={cardRef}>
    <CSSTransition
        in={isView}
        timeout={{enter: 0, exit: 2000}}
        classNames={{enterDone: "card__wrapper", exitActive: "card__wrapper card__wrapper--hidden-active", exitDone: "card__wrapper card__wrapper--hidden"}}
        onExit={() => setIsClickable(false)}
      >
        <div className={"card__wrapper"}>
                <div className={clsx("card__back", isViewFront ? "card__back--view-front" : null)} onClick={() => onClickForScore(cardRef)}>
                    <img src={cardBackground} alt="cardBackground" />
                </div>
            <div className={clsx("card__front", isViewFront ? "card__front--view-front" : null)} data-position = {dataPositonForImg} onClick={() => isClickable ? onClickForDescription() : null}>
                <CardLoader style = {isLoad ? null : {display: "none"}}/>
                <div className={"card__error"} style = {isImageError && !isLoad ? null :  {display: "none"}}>
                        <h2>{name}</h2>
                        <p>error picture did not load</p>
                </div>
                {image.url ? <img ref = {settingLoadImg} alt={name} style = {!isImageError && !isLoad ? null : {display: "none"}} /> : null}
            </div>
        </div>
        </CSSTransition>
    </div>
    )
});

Card.defaultProps = {isViewFront: false, image: {url: null, width: null, height: null}};

export default memo(Card)

//https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
