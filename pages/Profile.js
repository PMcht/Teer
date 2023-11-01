import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import Header from '../components/Header';
import { StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NextEvents from '../components/NextEvents';
import { useNavigation } from '@react-navigation/native';

export default function Profile({setPlayers}) {
    const {height, width, scale, fontScale} = useWindowDimensions();

    const navigation = useNavigation();

    return (
  
      <View style={[styles.mainContainer, {flex: 1}]}>

          <ScrollView>

            <View style={[styles.section, styles.profileSection, {paddingTop: StatusBar.currentHeight + 30}]}>

                <MaterialCommunityIcons name={'account-edit'} style={styles.iconSettings} />

                <Image
                  style={styles.profilePic}
                  source={require('../assets/Booking/Resa/Persons/Paul.jpg')}
                />
                
                <Text style={styles.bold}>Paul Michaut</Text>
                <View style={styles.profileSetup}>

                    <TouchableOpacity style={styles.iconBorder}>
                        <MaterialCommunityIcons name={'pen-plus'} style={styles.iconProfile} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconBorder}>
                        <MaterialCommunityIcons name={'email'} style={styles.iconProfile} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconBorder}>
                        <MaterialCommunityIcons name={'qrcode'} style={styles.iconProfile} />
                    </TouchableOpacity>

                </View>

            </View>

            <View style={[styles.section , {marginTop: 15}]}>

              <Text style={styles.titleBold}>Mes prochains évènements</Text>

              <NextEvents setPlayers={setPlayers} />

            </View>

            <View style={styles.section}>

              <Text style={styles.titleBold}>Mes cartes récentes</Text>

            </View>

            <View style={styles.section}>

                <Text style={styles.titleBold}>Mes statistiques</Text>

            </View>



          </ScrollView>

      </View>
    )
  }
const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "#faf8f7",
    },
    titleBold: {
      fontWeight: 'bold',
      fontSize: 18,
      marginHorizontal: 25
    },
    section: {
      paddingVertical: 15
    },

    profileSection: {
      position: 'relative',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 30,
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 3,
    },
    iconSettings: {
      position: 'absolute',
      right: 50,
      top: 50,
      fontSize: 25,
      color: 'gray',
      opacity: .5
    },
    profilePic: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    bold: {
      fontSize: 28,
      fontWeight: 'bold',
      marginVertical: 10
    },
    profileSetup:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '80%',
      marginHorizontal: "10%"
    },
    iconBorder: {
      backgroundColor: 'rgba(37, 150, 190, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 55,
      height: 55,
      borderRadius: 50
    },
    iconProfile:{
      fontSize: 25
    }
  })