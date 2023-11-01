import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import Header from '../components/Header';
import { StatusBar } from 'react-native';

export default function Proshop() {
    const {height, width, scale, fontScale} = useWindowDimensions();

    return (
  
      <View style={[styles.mainContainer, {flex: 1}]}>

      <Header />

          <ScrollView>



          </ScrollView>

      </View>
    )
  }
const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "#faf8f7",
      paddingTop:StatusBar.currentHeight
    }
  })