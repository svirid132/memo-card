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