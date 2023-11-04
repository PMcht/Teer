import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { holeslist } from '../../utils/json/holesList'

export default function ScoreHole({navigation, route, hole}) {

  return (

    <View style={[styles.mainContainer, {flex: 1}]}>

        <View style={styles.holeInfos}>

            <View style={styles.holeData}>
                <Text style={styles.holeNB}>Trou N°{hole.holeNB}</Text>
            </View>

            <View style={styles.score}>

            </View>

        </View>

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

  holeInfos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '86%',
    marginHorizontal: '7%',
    marginVertical: 20
  },
  holeNB: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})