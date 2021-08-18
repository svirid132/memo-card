import React from 'react'
import {forwardRef} from 'react'

const Description =  forwardRef(({isView, imageUrl, title, description, onClick}, ref) => {
    return (
        <div className="description" ref={ref} style={{display: isView ? null : "none"}}>
            <div className="description__wrapper-outher">
                <div className="description__wrapper-internal">
                    <button className="description__button" onClick={() => onClick()}>[x]</button>
                            <div className="description__img"><img src={imageUrl} alt="1" /></div>
                            <h2 className="description__title">{title}</h2>
                            <span dangerouslySetInnerHTML={{__html: description}} className="description__description"></span>
                        </div>
                    </div>
                </div>
    )
})

export default Description
