import React, { createContext } from 'react'
import { View, Text } from 'react-native'

const WatchListContext = createContext();

const FavoriteList = ({children}) => {
    return (
        <WatchListContext.Provider>
            {children}
        </WatchListContext.Provider>
    )
}

export default FavoriteList
