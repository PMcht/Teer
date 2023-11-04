import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { holeslist } from '../../utils/json/holesList'
import { Button } from 'react-native'

export default function ScoreSummary({navigation, route, setHole}) {



  return (
    <View style={[styles.mainContainer, {flex: 1}]}>

      <ScrollView>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            onPress={() => navigation.navigate('HoleSelect')}
            title="Go to notifications"
          />
        </View>

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


})