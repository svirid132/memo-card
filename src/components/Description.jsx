import React from 'react'

const Description =  ({src, title, description, onClick}) => {
    return (
        <div className="description" style={{zIndex: 1000}}>
            <div className="description__wrapper-outher">
                <div className="description__wrapper-internal">
                    <button className="description__button" onClick={() => onClick()}>[x]</button>
                            <div className="description__img"><img src={src} alt={title} /></div>
                            <h2 className="description__title">{title}</h2>
                            <span dangerouslySetInnerHTML={{__html: description}} className="description__description"></span>
                        </div>
                    </div>
                </div>
    )
}

export default Description
