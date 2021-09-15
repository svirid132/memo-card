import styled, {css} from "styled-components"
import React, {useState} from 'react'
import CardLoader from './CardLoader'

const IMG_POSITION = {
    VERTICAL: "VERTICAL",
    HORIZONTAL: "HORIZONTAL",
}

export const FRONT_STATE = {
    VIEW: "VIEW",
    UNVIEW: "UNVIEW",
    HIDDEN: "HIDDEN",
}

function Front({image, name, state, className}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(image ? false : true);

    let hidden = false;
    let view = false;
    switch(state) {
        case FRONT_STATE.VIEW: {
            view = true;
            break;
        }
        case FRONT_STATE.HIDDEN: {
            view = true;
            hidden = true;
            break;
        }
        default: {}
    }

    let imagePosition = null;
    if (image) {
        imagePosition = image.width > image.height ? IMG_POSITION.VERTICAL : IMG_POSITION.HORIZONTAL;
    }

    return (
        <div className = {className}>
            <Wrapper
                view = {view}
                delayHidden = {hidden}
            >
                {isError && !image && <Error name= {name.replaceAll('_', ' ')}/>}
                { !isLoaded && !isError && image && <CardLoader style={{zIndex: 1, position: "absolute"}}/> }
                { image &&
                    <Img 
                    src = {image.src}
                    vertical = {imagePosition === IMG_POSITION.VERTICAL}
                    horizontal = {imagePosition ===  IMG_POSITION.HORIZONTAL}
                    onLoad = {() => setIsLoaded(true)} 
                    onError={() => setIsError(true)}
                    alt={name}
                />}
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    transform: perspective(1200px) rotateY(180deg);
    width: 20rem;
    height: 30rem;
    backface-visibility: hidden;
    transition: transform 0.5s linear, opacity 1s 1s;
    opacity: 1;
    position: relative;

    ${props => props.view && css`transform: perspective(1200px) rotateY(0deg);`}
    ${props => (props.delayHidden && css`
        opacity: 0;
    `)}
`
const Error = styled( ({name, className}) => (
    <div className = {className}>
        <h2>{name}</h2>
        <p>Картинка не загрузилась</p>
    </div>
))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 30rem;
    text-align: center;
    color: white;
    background-color: gray;
    border-radius: 10px;
    & h2 {
        font-size: 3rem;
    }
    & p {
        margin-top: 3rem;
        font-size: 2rem;
        width: 15rem;
    }
`;

const Img = styled.img.attrs((props => ({
    alt: props.alt,
    onLoad: props.onLoad,
    onError: props.onError,
})))`
    z-index: 10;
    border-radius: 10px;
    ${props => (props.vertical && css`
        width: 30rem;
        height: 20rem;
        object-fit: cover;
        transform: rotate(-90deg);
        transform-origin: 50% 75%;
    `)}
    ${props => (props.horizontal && css`
        width: 20rem;
        height: 30rem;
        object-fit: cover;
    `)}
` 

Front.defaultProps = {
    name: "???",
}

export default Front;
