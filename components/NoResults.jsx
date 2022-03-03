import { View, Text } from 'react-native'
import React from 'react'
import atoms from './atoms'

const NoResults = () => {
  return (
    <View style={atoms.contentCenter}>
      <Text style={atoms.mediumText}>Oops!! No results :(</Text>
    </View>
  )
}

export default NoResults