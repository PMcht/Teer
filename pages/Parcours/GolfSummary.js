import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { ScrollView } from 'react-native'

export default function GolfSummary() {

  

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
        backgroundColor: "#fff",
      },
})