import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import Header from '../components/Header';

export default function Profile() {
    const {height, width, scale, fontScale} = useWindowDimensions();

    return (
  
      <View style={[styles.mainContainer, {minHeight: height}]}>
  
          <Header />
      
      </View>
    )
  }
const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "#fff"
    }
  })