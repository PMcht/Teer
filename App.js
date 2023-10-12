import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home'
import News from './pages/News';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Parcours from './pages/Parcours';
import Proshop from './pages/Proshop';
import Profile from './pages/Profile';

export default function App() {

  const Tab = createBottomTabNavigator();
  const {height, width, scale, fontScale} = useWindowDimensions();

  return (
    <NavigationContainer>

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
                    <Home />
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
      
    </NavigationContainer>
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
