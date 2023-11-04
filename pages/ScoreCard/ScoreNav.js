import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../../components/Header';
import ScoreSummary from './ScoreSummary';
import ScoreHole from './ScoreHole';
import ScoreHoleInfo from './ScoreHoleInfo';
import { StatusBar } from 'react-native';
import { holeslist } from '../../utils/json/holesList';
import HoleSelect from './HoleSelect';
import { createDrawerNavigator } from '@react-navigation/drawer';




export default function ScoreNav() {

  const Drawer = createDrawerNavigator();
  
  const [hole, setHole] = useState(holeslist[0])
  
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Home">
          {(props) => (
              <ScoreSlideNav {...props} setHole={setHole} hole={hole} />
              )}
      </Drawer.Screen>
      <Drawer.Screen name="HoleSelect" >
          {(props) => (
              <HoleSelect {...props} setHole={setHole} />
              )}
      </Drawer.Screen>

    </Drawer.Navigator>
  )

}



export function ScoreSlideNav({setHole, hole}) {

    const Tab = createMaterialTopTabNavigator();

  return (


    <View style={[styles.mainContainer, {flex: 1}]}>
    
        <Header />
    
        <Tab.Navigator screenOptions={{tabBarStyle: styles.topBar, tabBarIndicatorStyle: {backgroundColor: '#2ba9bc', marginTop: 10}, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>
            
            <Tab.Screen name="Parcours">
                {(props) => (
                    <ScoreSummary {...props} setHole={setHole} />
                  )}
            </Tab.Screen>

            <Tab.Screen name="Trou">
                {(props) => (
                    <ScoreHole {...props} hole={hole} />
                  )}
            </Tab.Screen>

            <Tab.Screen name="GPS">
                {(props) => (
                    <ScoreHoleInfo {...props} hole={hole} />
                  )}
            </Tab.Screen>
        </Tab.Navigator>
    
    </View>

  )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#faf8f7",
        paddingTop:StatusBar.currentHeight
      },
      topBar:{
        backgroundColor: '#faf8f7'
      }
})