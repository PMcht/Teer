import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home'
import News from './pages/News';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Proshop from './pages/Proshop';
import Profile from './pages/Profile';
import { Easing } from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { ChoosePlayers } from './components/ChoosePlayers';
import { DepartResa } from './pages/Parcours/DepartResa';
import CoursResa from './pages/Parcours/CoursResa';
import PracticeResa from './pages/Home/PracticeResa';
import GolfSummary from './pages/Parcours/GolfSummary';
import { GolfList } from './pages/GolfList';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DepartSums } from './pages/Home/DepartSummary';
import ScoreSetup from './pages/ScoreCard/ScoreSetup';


export const config = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
}

export const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});


export default function App() {


  const Tab = createBottomTabNavigator();

  const {height, width, scale, fontScale} = useWindowDimensions();

  const [players, setPlayers] = useState('')
  const [golf, setGolf] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedHour, setSelectedHour] = useState('')


  return (
    
    <NavigationContainer >

    <Tab.Navigator screenOptions={{gestureEnabled:true,  headerShown: false, tabBarStyle: styles.navbar, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>

        <Tab.Screen
          name="Home"
          options={{
              headerShown:false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
              cardStyleInterpolator: forFade,
          }}
            >
            {(props) => (
              <NavHome players={players} setPlayers={setPlayers} golf={golf} setGolf={setGolf} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedHour={selectedHour} setSelectedHour={setSelectedHour} />
            )}
        </Tab.Screen>

        <Tab.Screen
          name="News"
          options={{
              headerShown:false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="newspaper" color={color} size={size} />
              ),
              cardStyleInterpolator: forFade,
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
              cardStyleInterpolator: forFade,
          }}
            >
            {(props) => (
              <NavParcours players={players} setPlayers={setPlayers} golf={golf} setGolf={setGolf} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedHour={selectedHour} setSelectedHour={setSelectedHour} />
            )}
        </Tab.Screen>

        <Tab.Screen
          name="Proshop"
          options={{
              headerShown:false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="shopping" color={color} size={size} />
              ),
              cardStyleInterpolator: forFade,
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
            cardStyleInterpolator: forFade,
          }}
            >
            {(props) => (
              <NavProfile setPlayers={setPlayers} players={players} />
            )}
        </Tab.Screen>


        </Tab.Navigator>

      
      
    </NavigationContainer>

  );
}






export function NavHome({players, setPlayers, golf, setGolf, selectedDate, setSelectedDate, selectedHour, setSelectedHour}) {


  const Stack = createStackNavigator();

  return (

    <Stack.Navigator screenOptions={{gestureEnabled:true, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>

      
              <Stack.Screen
                name="HomeNext"
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
                    <Home {...props} setPlayers={setPlayers} />
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



      </Stack.Navigator>
      
  );
}

export function NavParcours({players, setPlayers, golf, setGolf, selectedDate, setSelectedDate, selectedHour, setSelectedHour}) {


  const Stack = createStackNavigator();

  return (

    <Stack.Navigator screenOptions={{gestureEnabled:true, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>

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


              <Stack.Screen
                name="ScoreSetup"
                options={{
                  headerShown:true,
                  headerTitle:'Nouvelle carte de score',
                  headerStyle: {
                    backgroundColor: '#faf8f7',
                  },
                  transitionSpec: {
                    open: config,
                    close: config
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                  >
                  {(props) => (
                    <ScoreSetup {...props} players={players} setPlayers={setPlayers} golf={golf} setGolf={setGolf} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedHour={selectedHour} setSelectedHour={setSelectedHour} />
                  )}
              </Stack.Screen>


              <Stack.Screen
                name="DepartResa"
                options={{
                  headerShown:true,
                  headerTitle:'Nouveau Départ',
                  headerStyle: {
                    backgroundColor: '#faf8f7',
                  },
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
                  headerStyle: {
                    backgroundColor: '#faf8f7',
                  },
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
                name="GolfSummary"
                options={{
                  headerShown:false,
                  transitionSpec: {
                    open: config,
                    close: config
                  },
                  cardStyleInterpolator: forFade,
                }}
                  >
                  {(props) => (
                    <GolfSummary players={players} setPlayers={setPlayers} golf={golf} setGolf={setGolf} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedHour={selectedHour} setSelectedHour={setSelectedHour} />
                  )}
              </Stack.Screen>



      </Stack.Navigator>
      
  );
}


export function NavProfile({players, setPlayers, golf, setGolf, selectedDate, setSelectedDate, selectedHour, setSelectedHour}) {


  const Stack = createStackNavigator();

  return (

    <Stack.Navigator screenOptions={{gestureEnabled:true, tabBarActiveTintColor: '#2ba9bc', tabBarInactiveTintColor: 'gray'}}>



              <Stack.Screen
                name="ProfileNext"
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
                    <Profile {...props} players={players} setPlayers={setPlayers} />
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



      </Stack.Navigator>
      
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
