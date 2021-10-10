import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import SplashScreen from './lib/screens/SplashScreen'
import HomeScreen from './lib/screens/HomeScreen'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
}

export default function App() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <SafeAreaView style={styles.container}>
        <SplashScreen duration={3} />
        <HomeScreen />
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
})
