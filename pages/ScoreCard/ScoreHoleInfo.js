import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScoreHoleInfo({hole}) {
  return (
    <View style={[styles.mainContainer, {flex: 1}]}>
        <Image
          style={styles.holePic}
          source={hole.IMG}
          resizeMethod="resize"
          resizeMode="cover"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#faf8f7",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  holePic: {
    maxWidth: '100%',
    maxHeight: '80%'
  }
})