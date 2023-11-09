import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BottomDrawer from '../../components/BottomDrawer';
import Accordian from '../../components/Accordion';
import { scoreTemp } from '../../utils/json/scoreTemp';

export default function ScoreHole({navigation, route, hole, setHole}) {

  return (

    <View style={[styles.mainContainer, {flex: 1}]}>

        <View style={styles.holeInfos}>

            <View style={styles.holeData}>

                  <Text style={styles.holeNB}>Trou N°{hole.holeNB}</Text>

                  <View style={styles.holeDatas}>

                      <Text style={styles.holedataNB}>{hole.distanceWhite}</Text>
                      <Text style={styles.holedataName}> M • </Text>

                      <Text style={styles.holedataName}> PAR </Text>
                      <Text style={styles.holedataNB}>{hole.par}</Text>

                      <Text style={styles.holedataName}> • HCP </Text>
                      <Text style={styles.holedataNB}>{hole.hcp}</Text>

                  </View>


            </View>

            <View style={styles.score}>

              <View style={styles.flex}>

                  <Text style={styles.holedataName}>MON SCORE</Text>

                  <View style={[styles.flex, {flexDirection: 'row', gap: 5}]}>

                      <Text style={styles.globalScore}>E</Text>
                      <View style={{height: '70%', width: 1, backgroundColor: 'grey'}} />
                      <Text style={[styles.globalScore, {backgroundColor: '#e9ebf0', color: '#3D85C6', paddingBottom: 1, paddingHorizontal: 10, borderRadius: 10}]}>NET -3</Text>

                  </View>

              </View>

            </View>

        </View>

        <ScrollView>

          <Accordian  
                title = 'test'
                hole={hole}
            />

<TouchableOpacity onPress={() => console.log(holeData)}>
            <Text>Console</Text>
          </TouchableOpacity>

        </ScrollView>


        <BottomDrawer setHole={setHole} hole={hole} />

  

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
    fontSize: 18,
    fontWeight: 'bold'
  },



  score: {
    width: '40%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#E3E1E1',
    borderRadius: 15,
    paddingTop: 6
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },


  globalScore: {
    fontWeight: 'bold',
    fontSize: 18
  },


  holeData: {
    display: 'flex',
    justifyContent: 'center',
  },
  holeDatas: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  holedataNB: {
    color: '#2ba9bc',
    fontWeight: 'bold',
    fontSize: 20
  },
  holedataName: {
    lineHeight: 20,
    marginBottom: 2,
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'italic',
    color: 'gray'
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
    fontWeight: 'bold'
  },


})