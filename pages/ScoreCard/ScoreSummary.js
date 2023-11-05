import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { holeslist } from '../../utils/json/holesList'
import { Button } from 'react-native'
import BottomDrawer from '../../components/BottomDrawer'

export default function ScoreSummary({navigation, route, setHole}) {



  return (
    <View style={[styles.mainContainer, {flex: 1}]}>

      <ScrollView>



      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#faf8f7",
  },
  borderBottom: {
      borderBottomWidth: 1,
      borderColor: '#e9ebf0',
      marginBottom: 20,
      paddingBottom: 20,
  },

  holeNumbers: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    marginHorizontal: '5%',
    gap: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e9ebf0',
    marginVertical: 20,
    paddingVertical: 20,
  },
  hole: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ba9bc',
    height: 50,
    width: 50,
    borderRadius: 50
  },
  holeNB: {
    fontSize: 25,
    marginBottom: 3,
    color: '#fff',
    fontWeight: 'bold'
  }
})