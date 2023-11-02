import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useWindowDimensions } from 'react-native'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import NextEvents from '../components/NextEvents';

export default function Home({setPlayers, setGolf, setSelectedDate, setSelectedHour}) {

  const {height, width, scale, fontScale} = useWindowDimensions();

  const navigation = useNavigation();

  const slides = [
    {
      id: 0,
      title: 'Parcours',
      img: "golf",
      link: 'Parcours',
      desc: 'Réserver un départ'
    },
    {
      id: 1,
      title: 'Cours',
      img: "golf-cart",
      link: 'Parcours',
      desc: 'Prendre un cours'
    },
    {
      id: 2,
      title: 'Practice',
      img: "golf-tee",
      link: 'PracticeResa',
      desc: 'Recharge de practice'
    },
    {
      id: 3,
      title: 'Compétition',
      img: "medal",
      link: 'CompetResa',
      desc: 'Inscription competition'
    },
  ]
  

  return (

    <View style={[styles.mainContainer, {flex: 1}]}>

        <Header style={styles.header} />

        <ScrollView>

          <View style={[styles.container]}>

            <View style={styles.welcome}>
              <View>
                <View style={styles.welcomeMain}>
                  <Image
                      style={styles.pic}
                      source={require('../assets/Weather/cloudy.png')}
                    />
                  <Text style={styles.weather}>20°C</Text>
                </View>

                <Text style={styles.msg}>Bonjour, Paul</Text>
              </View>
              <Image
                  style={styles.profilePic}
                  source={require('../assets/Booking/Resa/Persons/Paul.jpg')}
                />
            </View>


            <View style={styles.stats}>

                <View style={styles.statistics}>
                  <Text style={styles.boldStat}>32</Text>
                  <Text>Départs</Text>
                </View>

                <View style={styles.statistics}>
                  <Text style={styles.boldStat}>12</Text>
                  <Text>Index</Text>
                </View>

                <View style={styles.statistics}>
                  <Text style={styles.boldStat}>22</Text>
                  <Text>Slope</Text>
                </View>

            </View>
          </View>


          <View style={styles.next}>

              <Text style={styles.bold}>Mes évènements à venir</Text>

              <NextEvents setPlayers={setPlayers} />

          </View>


          <Text style={[styles.bold, { marginTop: 30, marginBottom: 20}]}>Réserver un évènement</Text>


          <View style={styles.book}>

              {slides.map((item) => {

                  return (
                  <View key={item.id} style={ [styles.bookingCard] } distance={15} >
                      <TouchableOpacity style={ [styles.bookingCardInside] } onPress={() => (navigation.navigate(item.link))}>

                          <MaterialCommunityIcons style={styles.Icon} name={item.img} />

                          <Text style={[styles.center]}>{item.title}</Text>
                        
                      </TouchableOpacity>
                  </View>
                  )
                  })}

          </View>

          <View style={styles.shop}>

              <Text style={styles.bold}>Dernières offres Bluegreen</Text>

          </View>

       </ScrollView>

                
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#faf8f7",
    paddingTop:StatusBar.currentHeight
  },

  welcome: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10
  },
  welcomeMain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  weather: {
    fontSize: 14
  },
  pic: {
    height: 14,
    width: 14,
    marginRight: 10
  },
  msg: {
    fontSize: 24,
    fontWeight: "700"
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50
  },


  stats: {
    width: '94%',
    marginLeft: "3%",
    height: 80,
    backgroundColor: 'rgba(37, 150, 190, 0.1)',
    marginVertical: 20,
    paddingHorizontal: 5,
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 25
  },
  statistics: {
    width: '30%',
    height: 60,
    padding: 5,
    backgroundColor: '#fff',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  boldStat: {
    fontWeight: '700',
    fontSize: 18
  },


  next: {
    marginTop: 10,
    width: '100%',
    overflow: 'visible'
  },
  bold: {
    fontWeight: '700',
    fontSize: 18,
    marginHorizontal: 25
  },



  book: {
    width: '100%',
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
    columnGap: 10,
  },
  bookingCard:{
    width: 90,
    height: 90,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: "#fff"
  },
  Icon:{
    marginBottom: 10,
    alignSelf: 'center',
    fontSize: 30,
    color: 'grey',
  },
  center:{
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',

  },


  shop: {
    marginTop: 40
  },
  shopping:{
    marginTop: 10,
    width: '100%',
  }

})