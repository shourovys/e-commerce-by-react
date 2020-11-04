import React, { useContext, createContext, useState, useEffect } from 'react';


const popUpContext = createContext()

export const usePopup = () => useContext(popUpContext)


const PopupContext = props => {
    const [popupData, setPopupData] = useState({})
    const showPupUpWithData = (massage, type) => setPopupData({ massage, type })

    useEffect(() => {
        setTimeout(() => {
            setPopupData({})
            console.log('end')
        }, 8000);
        console.log('start')
    }, [popupData.massage])

    return (
        <popUpContext.Provider value={{ popupData, setPopupData, showPupUpWithData }}>
            {props.children}
        </popUpContext.Provider>
    );
};

export default PopupContext;