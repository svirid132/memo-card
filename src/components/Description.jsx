import React from 'react'
<<<<<<< HEAD

const Description =  ({src, title, description, onClick}) => {
    return (
        <div className="description" style={{zIndex: 1000}}>
            <div className="description__wrapper-outher">
                <div className="description__wrapper-internal">
                    <button className="description__button" onClick={() => onClick()}>[x]</button>
                            <div className="description__img"><img src={src} alt={title} /></div>
=======
import {forwardRef} from 'react'

const Description =  forwardRef(({isView, imageUrl, title, description, onClick}, ref) => {
    return (
        <div className="description" ref={ref} style={{display: isView ? null : "none"}}>
            <div className="description__wrapper-outher">
                <div className="description__wrapper-internal">
                    <button className="description__button" onClick={() => onClick()}>[x]</button>
                            <div className="description__img"><img src={imageUrl} alt="1" /></div>
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee
                            <h2 className="description__title">{title}</h2>
                            <span dangerouslySetInnerHTML={{__html: description}} className="description__description"></span>
                        </div>
                    </div>
                </div>
    )
<<<<<<< HEAD
}
=======
})
>>>>>>> cabde82cd3109b689791deeeafb923fff13298ee

export default Description
