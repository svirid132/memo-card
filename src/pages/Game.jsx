import React, {useState, useEffect, useMemo, memo, useCallback, useLayoutEffect, forwardRef, useImperativeHandle, useRef} from 'react'
import data from '../assets/data.json'
import {FieldGame} from '../components/index'
import randomaizer from './randomizer'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useParams, useLocation } from 'react-router-dom'
import {Status, Navigation, Description, Finish} from "../components/index";


function initCardsState(cardLength, fieldLength) {
    const indexArr = randomaizer(cardLength * 2);
    const arr = indexArr.map((item) => {
        const id = (item >= cardLength ? item - cardLength : item) + 1;
        return {
            id: id,
            isViewFront: false,
            isView: true
        }
    }    
    );

    let fieldArr = [];
    for (let i = 0; i < fieldLength; ++i ) {
        let pathArr = arr.splice(0, cardLength * 2 / fieldLength);
        fieldArr.push(pathArr);
    }

    return fieldArr;
}

function initScores(_userNames, scoreLength) {
    const userNames = [];
    for(let key in _userNames) {
        userNames.push({name: _userNames[key], score: 0});
    };
    return {users: userNames, currentUserIndex: 0, score: {currentPoints: 0, allPoints: scoreLength}};
}

function Game() {
    const location = useLocation();

    const [items, setItems] = useState(initCardsState(data.names.length, 5));
    const [currentPage, setCurrentPage] = useState(1);
    const [selectCards, setSelectCards] = useState([]); 
    const [isClickCard, setIsClickCard] = useState(true);
    const [description, setDescription] = useState({});
    const [scores, setScores] = useState(initScores(location?.state?.userNames, data.names.length));

    const descriptionRef = useRef();
    const navigationRef = useRef();

    useEffect(() => {

            const objImgs = [];
            const objTexts = [];

            const appadingObjImgs = (obj) => {
                objImgs.push(obj);
                if (objImgs.length === data.names.length) {
                    const newItems = updateItems(objImgs, objTexts);
                    setItems(newItems);
                }
            };
            

        const updateItems = (objImgs, objTexts) => {
            const newItems = items.map((page) => {
                return page.map((card) => {
                    const objImg = objImgs.find((item) => item.id === card.id || item.id === card.id - data.names.length);
                    const objText = objTexts.find((item) => item.id === card.id || item.id === card.id - data.names.length);
                    const newCard = {...card, ...objImg, ...objText};
                    return newCard;
                });
            });
            return newItems;
        }

        const loadCardImage = (id) => {
            fetch(`https://ru.wikipedia.org/api/rest_v1/page/summary/${data.names[id - 1]}`)
                .then(async response => {
                    const responseData = await response.json();
                    if (!response.ok) {
                        return Promise.reject();
                    }
                    const endSeparateIndex = responseData.originalimage.source.lastIndexOf("/");
                    objTexts.push({id: id, name: responseData.title, description: responseData.extract_html});
                    return ({
                        name: responseData.originalimage.source.substr(endSeparateIndex + 1),
                        width: responseData.originalimage.width,
                        height: responseData.originalimage.height
                    })})
                .then(img => {
                    const size = img.width > img.height ? "width" : "height"; 
                    fetch(`https://ru.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=imageinfo&titles=File:${img.name}&iiprop=timestamp%7Cuser%7Curl&iiurl${size}=1280`)
                        .then(async response => {
                            const responseData = await response.json();
                            if (!response.ok) {
                                return Promise.reject();
                            }
                            for (const property in responseData.query.pages) {
                                if (Number.isInteger(Number(property))) {
                                    const imageInfo = responseData.query.pages[property].imageinfo[0];
                                    return {
                                        url: imageInfo.thumburl,
                                        width: imageInfo.thumbwidth,
                                        height: imageInfo.thumbheight,
                                    };
                                }
                            }
                        })
                        .then(img => {
                            appadingObjImgs({id: id, image: img});
                        })
                        .catch(() => {
                            appadingObjImgs({id: id, isErrorImage: false});
                        })
            })
            .catch(() => {
                appadingObjImgs({id: id, isErrorImage: false});
            });
        }

        for (let i = 1; i < data.names.length + 1; ++i) {
            loadCardImage(i);
        }
    }, [] );

    useEffect(() => {
        if (selectCards.length === 2) {
            if (selectCards[0].id === selectCards[1].id) {
                const newScores = Object.assign({}, scores);
                newScores.users = newScores.users.map((user, index) => {;
                    if (newScores.currentUserIndex === index){
                        return {...user, score: user.score + 1}
                    }
                    return user;
                });
                newScores.score = Object.assign({}, scores.score);
                ++newScores.score.currentPoints;
                newScores.currentUserIndex = newScores.currentUserIndex === newScores.users.length - 1 ? 0 : newScores.currentUserIndex + 1;
                setScores(newScores);

                const newItems = items.map((page) => {
                    if (page.some((card) => card.id === selectCards[0].id)) {
                        return page.map((card) => {
                            if (card.id === selectCards[0].id) {
                                return {...card, isView: false};
                            }
                            return card;
                        });
                    };
                    return page;
                });
                setItems(newItems);
                setSelectCards([]);
                return;
            }
            setIsClickCard(false);
            const handleClickOnScreen = (event) => {
                const path = event.path || (event.composedPath && event.composedPath());
                if (!path.includes(selectCards[0].ref.current) && !path.includes(selectCards[1].ref.current) && !path.includes(descriptionRef.current) && !path.includes(navigationRef.current)) {
                    console.log(items);
                    const newItems = items.map((page) => {
                        return page.map((card) => {
                            if (card.id === selectCards[0].id || card.id === selectCards[1].id) {
                                const newCard = Object.assign({}, card);
                                newCard.isViewFront = false;
                                return newCard;
                                }
                            return card;
                        }
                    )
                    });
                    
                    const newScores = Object.assign({}, scores);
                    newScores.score = Object.assign({}, scores.score);
                    newScores.currentUserIndex = newScores.currentUserIndex === newScores.users.length - 1 ? 0 : newScores.currentUserIndex + 1;
                    setScores(newScores);

                    setIsClickCard(true);
                    setItems(newItems);
                    setSelectCards([]);
                    document.body.removeEventListener("click", handleClickOnScreen);
                }   
            }
            document.body.addEventListener("click", handleClickOnScreen);
        }
    }, [selectCards]); 

    console.log(items);

    return (
        <>
            <Description { ...description } onClick = {() => setDescription({})} ref={descriptionRef}/>
            <Status users={scores.users} currentUserIndex={scores.currentUserIndex} score={scores.score}/>
            <Navigation currentPage={currentPage} length={items.length} onClick = {(currentPageArg) => setCurrentPage(currentPageArg)} ref={navigationRef}/>
            {scores.score.allPoints === scores.score.currentPoints ? 
                (() => {
                    const user = scores.users.reduce((accamulator, currentValue) => {
                        if (currentValue.score > accamulator.score) return currentValue;
                        return accamulator;
                    }, {name: "", score: -1});
                    return <Finish user={user.name} score={user.score}/>
                })() :
                null
            }
            <Switch>
                <Route path="/game/:id" exact>
                    <FieldGamePage items={items} setItems={setItems} selectCards={selectCards} setSelectCards={setSelectCards} isClickCard={isClickCard} setIsClickCard={setIsClickCard} setDescription={setDescription}/>
                </Route>
            </Switch> 
        </>
    )
}

const FieldGamePage =  ({items, setItems, selectCards, setSelectCards, isClickCard, setIsClickCard, setDescription}) => {
    let { id } = useParams();
    const pageNum = id;

    const pathItems = items[pageNum - 1];

    return (<FieldGame key={pageNum} items = {pathItems} onMiddleClickForScore = {(index) => (ref) => {

        if (!isClickCard) {
            setIsClickCard(true);
            return;
        }

        const newPathItems = pathItems.map((item, innerIndex) => {
            if (innerIndex === index) {
                let newItem = Object.assign(item);
                newItem.isViewFront = !item.isViewFront;
                if (newItem.isViewFront){
                    const newSelectCards = Object.assign([], selectCards);
                    newSelectCards.push({id: item.id, ref: ref});
                    setSelectCards(newSelectCards);
                }
                return newItem;
            }
            return item;
        });

        const newItems = items.map((pathItems, index) => {
            if (pageNum - 1 === index) return newPathItems;
            return pathItems;
        })

        setItems(newItems);
    }} 
    onMiddleClickForDescription = {(descriptionObj) => {
        setDescription(descriptionObj);
    }}/>);
}

export default Game
