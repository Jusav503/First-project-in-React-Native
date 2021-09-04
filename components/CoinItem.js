import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CoinItem = ({coin}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} 
                source={{uri: coin.image}}
            />            
            <Text style={styles.text}>{coin.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{backgroundColor: '#000000', paddingTop: 10},
    image:{width: 30, height: 30},
    text:{color: '#ffffff'},
})

export default CoinItem
