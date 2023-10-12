import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import Header from '../components/Header'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BlueGreenActu from './Actus/BlueGreenActu';
import FriendsActu from './Actus/FriendsActu';
import MyGolfActu from './Actus/MyGolfActu';

export default function News() {
  const {height, width, scale, fontScale} = useWindowDimensions();

  const Tab = createMaterialTopTabNavigator();

  return (

    <View style={[styles.mainContainer, {minHeight: height}]}>

        <Header />

        <Tab.Navigator screenOptions={{tabBarStyle: styles.topBar, tabBarIndicatorStyle: {backgroundColor: '#2ba9bc'}, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>
            <Tab.Screen name="BlueGreen" component={BlueGreenActu} />
            <Tab.Screen name="Mes Amis" component={FriendsActu}  />
            <Tab.Screen name="Mes Golfs" component={MyGolfActu}  />
      </Tab.Navigator>
    
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff"
  }
})