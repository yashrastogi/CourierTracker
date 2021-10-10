import { FlatList, View, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

export default function HomeScreen() {
  const [selectedProvider, setSelectedProvider] = useState()
  return (
    <View style={styles.container}>
        <View style={{padding: 10}}>
      <Picker
        selectedValue={selectedProvider}
        onValueChange={(item, idx) => setSelectedProvider(item)}
      >
        <Picker.Item label="Bluedart" value="bluedart" />
        <Picker.Item label="DHL" value="dhl" />
      </Picker></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
})
