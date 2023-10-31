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
import { DepartResa } from './pages/Home/DepartResa';
import { GolfList } from './components/GolfList';
import CoursResa from './pages/Home/CoursResa';
import PracticeResa from './pages/Home/PracticeResa';


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

      <Stack.Navigator screenOptions={{gestureEnabled:true, headerShown: false, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>

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
                  <BottomNav {...props} players={players} setPlayers={setPlayers} setGolf={setGolf} setSelectedDate={setSelectedDate} setSelectedHour={setSelectedHour} />
                )}
              </Stack.Screen>

              <Stack.Screen
                name="DepartSums"
                options={{
                  headerShown:true,
                  headerTitle:'Ma Réservation',
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
                name="DepartResa"
                options={{
                  headerShown:true,
                  headerTitle:'Nouveau Départ',
                  transitionSpec: {
                    open: config,
                    close: config
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                  >
                  {(props) => (
                    <DepartResa {...props} players={players} setPlayers={setPlayers} golf={golf} setGolf={setGolf} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedHour={selectedHour} setSelectedHour={setSelectedHour} />
                  )}
              </Stack.Screen>

              <Stack.Screen
                name="CoursResa"
                options={{
                  headerShown:true,
                  headerTitle:'Réserver un cours',
                  transitionSpec: {
                    open: config,
                    close: config
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                  >
                  {(props) => (
                    <CoursResa {...props} players={players} setPlayers={setPlayers} golf={golf} setGolf={setGolf} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedHour={selectedHour} setSelectedHour={setSelectedHour} />
                  )}
              </Stack.Screen>

              <Stack.Screen
                name="PracticeResa"
                options={{
                  headerShown:true,
                  headerTitle:'Mes crédits Practice',
                  transitionSpec: {
                    open: config,
                    close: config
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                  >
                  {(props) => (
                    <PracticeResa {...props} players={players} setPlayers={setPlayers} golf={golf} setGolf={setGolf} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedHour={selectedHour} setSelectedHour={setSelectedHour} />
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

              <Stack.Screen
                name="GolfList"
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
                    <GolfList setGolf={setGolf} {...props} />
                  )}
              </Stack.Screen>



      </Stack.Navigator>
      
    </NavigationContainer>

    </SafeAreaView>
  );
}






export function BottomNav({players, setPlayers, setGolf, setSelectedDate, setSelectedHour}) {

  const Tab = createBottomTabNavigator();


  return (


      <Tab.Navigator screenOptions={{gestureEnabled:true,  headerShown: false, tabBarStyle: styles.navbar, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>

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
                    <Home setPlayers={setPlayers} setGolf={setGolf} setSelectedDate={setSelectedDate} setSelectedHour={setSelectedHour} />
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
