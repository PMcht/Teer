import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useWindowDimensions } from 'react-native'
import { Image } from 'react-native';
import { FlatList } from 'react-native';
import { departsList } from '../utils/json/departsList';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';

export default function Home({setPlayers, setGolf, setSelectedDate, setSelectedHour}) {

  const {height, width, scale, fontScale} = useWindowDimensions();

  const navigation = useNavigation();

  const slides = [
    {
      id: 0,
      title: 'Parcours',
      img: "golf",
      link: 'DepartResa',
      desc: 'Réserver un départ'
    },
    {
      id: 1,
      title: 'Cours',
      img: "golf-cart",
      link: 'CoursResa',
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

        <Header />

        <ScrollView>

          <View style={[styles.container]}>

            <View style={styles.welcome}>
              <View>
                <View style={styles.welcomeMain}>
                  <Image
                      style={styles.pic}
                      source={require('../assets/Home/meteo.png')}
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

              <View style={{flex: 3}}>

                <FlatList
                      data={departsList}
                      renderItem={({ item }) => 
                      
                        <TouchableOpacity onPress={() => (setPlayers(departsList[departsList.indexOf(item)].with), navigation.navigate('DepartSums', {id:departsList.indexOf(item)}))} activeOpacity={.9} style={[styles.event, {width: (320), marginHorizontal: (10)}]} key={item.id}>
                            <Image
                              style={styles.bgEvent}
                              source={item.golfIMG}
                              resizeMode='cover'
                            />
                            <LinearGradient style={styles.bgLinear} colors={['rgba(19, 19, 20, 0)', 'rgba(19, 19, 20, 0.6)', 'rgba(19, 19, 20, 0.8)']}>
                                <View style={styles.names}>
                                    <Text style={styles.boldNext}>{item.golfName.length >= 12 ? item.golfName : `Golf de ${item.golfName}`} </Text>
                                    <Text style={styles.thinNext}>Le {item.date} à {item.hour}</Text>
                                </View>
                                <Text style={styles.button}>Plus d'infos</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        }
                        horizontal
                        showsHorizontalScrollIndicator ={false}
                        pagingEnabled
                        snapToInterval={(330)}
                        decelerationRate={0.0}
                        disableIntervalMomentum={ true }
                        keyExtractor={(item) => item.id}
                        scrollEventThrottle={1}
                        />

              </View>

          </View>


          <Text style={[styles.bold, { marginTop: 35, marginBottom: 20}]}>Réserver un évènement</Text>


          <View style={styles.book}>

              {slides.map((item) => {

                  return (
                  <View key={item.id} style={ [styles.bookingCard] } distance={15} >
                      <TouchableOpacity style={ [styles.bookingCardInside] } onPress={() => (setPlayers(''), setGolf(''), setSelectedDate(''), setSelectedHour(''), navigation.navigate(item.link))}>

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
    backgroundColor: "#fff",
  },

  welcome: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20
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
  },
  bold: {
    fontWeight: '700',
    fontSize: 18,
    marginHorizontal: 25
  },
  event: {
    height: 170,
    marginTop: 10,
    position: 'relative',
    borderRadius: 10,
    overflow: "hidden"
  },
  bgEvent: {
    position: "absolute",
    width: "100%",
    height: 200,
  },
  bgLinear: {
    position: "absolute",
    bottom: 0,
    height: '40%',
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  boldNext: {
    fontWeight: '700',
    fontSize: 20,
    color: "#fff"
  },
  thinNext: {
    color: "#fff",
    fontStyle: 'italic'
  },
  names:{
    maxWidth: 190
  },
  button:{
    backgroundColor: "#2ba9bc",
    paddingVertical: 5,
    paddingHorizontal: 14,
    fontSize: 16,
    borderRadius: 10,
    color: "#fff"
  },



  book: {
    width: '100%',
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
    columnGap: 30,
    rowGap: 15
  },
  bookingCard:{
    width: 160,
    height: 120,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#fbf9fb',
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: "#fff"
  },
  Icon:{
    width: 60,
    marginBottom: 10,
    alignSelf: 'center',
    height: 60,
    fontSize: 40,
    borderRadius: 50,
    color: '#2ba9bc',
    padding: 10,
    backgroundColor: '#fbf9fb'
  },
  center:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1
  },


  shop: {
    marginTop: 40
  },
  shopping:{
    marginTop: 10,
    width: '100%',
  }

})