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
