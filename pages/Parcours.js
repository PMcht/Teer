import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import Header from '../components/Header';
import { GolfList } from '../components/GolfList';

export default function Parcours() {
    const {height, width, scale, fontScale} = useWindowDimensions();

    return (
  
      <View style={[styles.mainContainer, {minHeight: height}]}>
  
          <Header />

          <GolfList />
      
      </View>
    )
  }

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "#fff"
    }
  })