import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
        <Image
        style={styles.tinyLogo}
        source={require('../assets/Logos/logo.png')}
        resizeMode="contain"
        />
  </View>
  )
}

const styles = StyleSheet.create({
    header: {
      paddingVertical: 10,
        backgroundColor: '#faf8f7',
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    tinyLogo: {
        maxHeight: 50,
        maxWidth: 150,
    },
    rightSide: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',

      icons: {
        fontSize: 25,
        color: 'grey',
        marginLeft: 10
      }
    }
})