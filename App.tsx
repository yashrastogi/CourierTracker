import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'

import SplashScreen from './lib/screens/SplashScreen'
import HomeScreen from './lib/screens/HomeScreen'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SplashScreen duration={3} />
      <HomeScreen />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
})