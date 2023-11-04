import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { holeslist } from '../../utils/json/holesList'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function HoleSelect({hole}) {
  return (
        <View style={[styles.mainContainer, {flex: 1}]}>
    
          <ScrollView>
    
              <View style={styles.holeNumbers}>
    
              {holeslist.map((hole) => {
    
                  return (
                      <TouchableOpacity key={hole.id} style={ [styles.hole] } onPress={() => (setHole(holeslist[hole.holeNB -1]), navigation.navigate('Trou'))}>
    
                          <Text style={styles.holeNB}>{hole.holeNB}</Text>
                        
                      </TouchableOpacity>
                  )
                  })}
    
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