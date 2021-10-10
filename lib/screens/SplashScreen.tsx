import { ActivityIndicator, Animated, StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SvgCssUri } from 'react-native-svg'

export default function SplashScreen(props: { duration: number }) {
  const [state, setState] = useState({ showSplash: true })
  const fadeAnim = useRef(new Animated.Value(1)).current

  new Promise((resolve) =>
    setTimeout(resolve, Math.max(props.duration - 1, 0) * 1000),
  ).then(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start()
    new Promise((resolve) =>
      setTimeout(resolve, 1000),
    ).then(() => setState({ ...state, showSplash: false }))
  })

  if (state.showSplash)
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <SvgCssUri
          width="50%"
          height="50%"
          uri="https://www.svgrepo.com/download/355777/crosshair-alt.svg"
        />
        <ActivityIndicator size="large" color="#000" />
      </Animated.View>
    )
  else return null
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
