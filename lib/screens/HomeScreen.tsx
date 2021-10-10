import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DropDown from 'react-native-paper-dropdown'
import { Button, Card, Text, TextInput, ActivityIndicator } from 'react-native-paper'

const providers = [
  { label: 'Delhivery', value: 'delhivery' },
  // { label: 'Bluedart', value: 'bluedart' },
]

export default function HomeScreen() {
  let pickerItems: JSX.Element[] = []

  const [selectedProvider, setSelectedProvider] = useState()
  const [trackingId, setTrackingId] = useState('')
  const [showDropDown, setShowDropDown] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)
  const checkTrackingId = (str: string) =>
    setTrackingId(str.replace(/[^0-9]/g, ''))

  function onPressSubmit() {
    setShowSpinner(!showSpinner)
  }

  function Spinner() {
    const size = 70
    if (showSpinner) return <ActivityIndicator size={size} />
    else return <View style={{ paddingTop: size }} />
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <DropDown
          label="Courier Service"
          mode="outlined"
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={selectedProvider}
          setValue={setSelectedProvider}
          list={providers}
          dropDownStyle={styles.default}
        />
        <TextInput
          label="Tracking ID"
          keyboardType="number-pad"
          mode="outlined"
          onChangeText={checkTrackingId}
          value={trackingId}
          style={styles.default}
        />
        <Button style={styles.default} mode="contained" onPress={onPressSubmit}>
          Submit
        </Button>
      </Card>
      <Spinner />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  default: {
    marginVertical: 15,
  },
  card: {
    margin: 10,
    padding: 10,
  },
})
