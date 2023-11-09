import React, {Component, useState} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, Image} from "react-native";
import { persons } from '../utils/json/persons';
import { scoreTemp } from '../utils/json/scoreTemp';

export default function Accordian({hole}) {

  const holeData = scoreTemp.filter(holeT => holeT.hole == hole.holeNB )

  const [shot,setShot] = useState(holeData[0].strokes)

    const [expand, setExpand] = useState(false)

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

          toggleExpand=()=>{
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setExpand(!expand)
          }

    return (
       <TouchableOpacity style={styles.accordion} onPress={()=>this.toggleExpand()}>
            <TouchableOpacity style={styles.mainVisible} onPress={()=>this.toggleExpand()}>

                <Image source={persons[0].img}  style={styles.profilePic} />

                <View style={styles.flexVertical}>
                  <Text style={styles.name}>{persons[0].name}</Text>
                  <Text style={styles.index}>Index : {persons[0].index}</Text>
                </View>
                
            </TouchableOpacity>

            <View style={styles.visibleSecond}>

                <Text style={styles.scoreTitle}>Score</Text>

                <View style={styles.score}>

                  <TouchableOpacity style={[styles.plusMinus, {borderColor: 'green'}]} onPress={() => setShot(shot-1)}>
                    <Text style={[styles.plusMinusText, {color: 'green'}]}>-</Text>
                  </TouchableOpacity>

                  <View style={styles.scoreDisplay}>

                    <Text style={styles.coups}>{shot}  / </Text>
                    <Text style={styles.netCoups}>NET 4</Text>

                  </View>

                  
                  <TouchableOpacity style={[styles.plusMinus, {borderColor: 'red'}]} onPress={() => setShot(shot+1)}>
                    <Text style={[styles.plusMinusText, {color: 'red'}]}>+</Text>
                  </TouchableOpacity>

                </View>

            </View>
                {
                expand &&
                
                    <Text >test</Text>

                }
            

            
       </TouchableOpacity>
    )
  }



const styles = StyleSheet.create({
    accordion: {
        width: '90%',
        marginVertical: 10,
        marginHorizontal: '5%',
        backgroundColor: "#fff",
        borderRadius: 15,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },

    mainVisible: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'relative',
      paddingHorizontal: 20,
      paddingVertical: 10
    },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginRight: 15
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16
    },
    index: {
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: 5,
      marginTop: 2,
      backgroundColor: '#858cd020',
      fontWeight: 'bold',
      color: '#858cd0'
    },

    visibleSecond: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingBottom: 10
    },
    score: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 10
    },
    scoreTitle: {
      fontWeight: 'bold',
      fontSize: 20
    },
    plusMinus: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    plusMinusText: {
      lineHeight: 41,
      fontSize: 40,
      fontWeight: '400',
    },

    scoreDisplay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical: 6,
      paddingHorizontal: 15,
      backgroundColor: '#A7A5A520',
      borderRadius: 10,
    },
    coups: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    netCoups: {
      marginTop: 6,
      fontStyle: 'italic'
    },
    
});