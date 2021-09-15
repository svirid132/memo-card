import styled, {css} from 'styled-components'
import React from 'react'
import cardBackground from "../../assets/card.jpg"

function Back({view, className}) {
    return (
        <div className = {className}>
            <Wrraper view = {view}>
                <Img src={cardBackground} alt="cardBackground" />
            </Wrraper>
        </div>
    )
}

const Wrraper = styled.div`
    backface-visibility: hidden;
    transform: perspective(1200px) rotateY(-180deg);
    transition: transform 0.5s linear;
    ${props => (props.view && css`
        transform: perspective(1200px) rotateY(0deg);
    `)};
`

const Img = styled.img.attrs(({src, alt}) => ({
    src: src,
    atl: alt,
}))`
    width: 20rem;   
    height: 30rem;
    border-radius: 10px;
`;

export default Back
