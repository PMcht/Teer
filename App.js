import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home'
import News from './pages/News';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Parcours from './pages/Parcours';
import Proshop from './pages/Proshop';
import Profile from './pages/Profile';
import { Easing } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { DepartSums } from './components/DepartSummary';
import { useState } from 'react';
import { ChoosePlayers } from './components/ChoosePlayers';


export const config = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}


export default function App() {

  const Stack = createStackNavigator();

  const {height, width, scale, fontScale} = useWindowDimensions();


  const [players, setPlayers] = useState('')
  const [golf, setGolf] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedHour, setSelectedHour] = useState('')


  return (

    <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight +20 : 0, maxWidth: width}}>
    
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false, tabBarStyle: styles.navbar, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>

              <Stack.Screen
                name="BottomNavigation"
                options={{
                  headerShown:false,
                  transitionSpec: {
                    open: config,
                    close: config
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                >
                {(props) => (
                  <BottomNav {...props} players={players} setPlayers={setPlayers} />
                )}
              </Stack.Screen>

              <Stack.Screen
                name="DepartSums"
                options={{
                  headerShown:false,
                  transitionSpec: {
                    open: config,
                    close: config
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                  >
                  {(props) => (
                    <DepartSums {...props} players={players} setPlayers={setPlayers} />
                  )}
              </Stack.Screen>

              <Stack.Screen
                name="ChoosePlayer"
                options={{
                  headerShown:false,
                  transitionSpec: {
                    open: config,
                    close: config
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                  >
                  {(props) => (
                    <ChoosePlayers {...props} players={players} setPlayers={setPlayers} />
                  )}
              </Stack.Screen>



      </Stack.Navigator>
      
    </NavigationContainer>

    </SafeAreaView>
  );
}






export function BottomNav({players, setPlayers}) {

  const Tab = createBottomTabNavigator();


  return (


      <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: styles.navbar, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>

              <Tab.Screen
                name="Home"
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
                  >
                  {(props) => (
                    <Home setPlayers={setPlayers} />
                  )}
              </Tab.Screen>

              <Tab.Screen
                name="News"
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="newspaper" color={color} size={size} />
                    ),
                }}
                  >
                  {(props) => (
                    <News />
                  )}
              </Tab.Screen>

              <Tab.Screen
                name="Parcours"
                options={{
                    headerShown:false,
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="golf-tee" color={color} style={styles.middle} size={size} />
                    ),
                }}
                  >
                  {(props) => (
                    <Parcours />
                  )}
              </Tab.Screen>

              <Tab.Screen
                name="Proshop"
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="shopping" color={color} size={size} />
                    ),
                }}
                  >
                  {(props) => (
                    <Proshop />
                  )}
              </Tab.Screen>

              <Tab.Screen
                name="Profile"
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
                  >
                  {(props) => (
                    <Profile />
                  )}
              </Tab.Screen>


      </Tab.Navigator>
      
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    paddingBottom: 10, 
    paddingTop: 10,
  },
  middle:{
    backgroundColor: '#2ba9bc',
    padding: 8,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: "#fff",
    fontSize: 30,
    marginTop: -10
  }
});
