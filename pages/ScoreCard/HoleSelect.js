import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { holeslist } from '../../utils/json/holesList'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function HoleSelect({setHole, toClose}) {
  
  return (
        <View style={[styles.mainContainer, {flex: 1}]}>
    
            <Text style={styles.textCenter}>Sélectionner un trou</Text>
    
              <View style={styles.holeNumbers}>
    
              {holeslist.map((hole) => {
    
                  return (
                      <TouchableOpacity key={hole.id} style={ [styles.hole] } onPress={() => ( setHole(holeslist[hole.holeNB - 1]), toClose())}>
    
                          <Text style={styles.holeNB}>{hole.holeNB}</Text>
                        
                      </TouchableOpacity>
                  )
                  })}
    
              </View>
        </View>
  )
}

const styles = StyleSheet.create({
  
      textCenter: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
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