import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { StatusBar } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Weather from '../../components/Weather'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { persons } from '../../utils/json/persons'
import MapView from 'react-native-maps'
import { Marker } from "react-native-maps"
import { FlatList } from 'react-native-gesture-handler'

export default function GolfSummary({route, golf, setPlayers, setSelectedDate, setSelectedHour}) {

  const navigation = useNavigation();

  const ammenitiesList = [
    {
      id: '0',
      name: '18 Trous',
      icon: 'golf'
    },
    {
      id: '1',
      name: '9 Trous',
      icon: "golf"
    },
    {
      id: '2',
      name: 'Cart',
      icon: 'golf-cart'
    },
    {
      id: '3',
      name: 'Practice',
      icon: "golf-tee"
    },
    {
      id: '4',
      name: 'Restaurant',
      icon: "food-drumstick"
    },
    {
      id: '5',
      name: 'Trackman',
      icon: "trackpad"
    },
    {
      id: '6',
      name: 'Tapis Hiver',
      icon: "weather-snowy-heavy"
    },
  ]

  return (
    <View style={[styles.mainContainer, {flex: 1}]}>

        <ScrollView removeClippedSubviews={true} >

            <View style={styles.IMGContainer}>
              <Image
                  style={styles.golfIMG}
                  source={golf.img}
                  resizeMethod="resize"
                  resizeMode="cover"
                />
            </View>

            <Text style={styles.golfName}>Golf de {golf.name}</Text>

            <View style={styles.belowTitle}>

                <View style={styles.stars}>
                  <MaterialCommunityIcons style={styles.starIcon} name={'star'} />
                  <Text style={styles.rate}>4.5/5</Text>
                </View>
                    
                 <View style={styles.belowTitle}>

                    <Image
                      style={styles.profilePic}
                      source={persons[0].img}
                      resizeMode="cover"
                      />  
                     <Image
                      style={styles.profilePic}
                      source={persons[1].img}
                      resizeMode="cover"
                      />  
                     <Image
                      style={styles.profilePic}
                      source={persons[2].img}
                      resizeMode="cover"
                      />  
                      <Image
                      style={styles.profilePic}
                      source={persons[3].img}
                      resizeMode="cover"
                      />   

                 </View>



            </View>


            <Text style={[styles.description, styles.borderBottom]} numberOfLines={3}>Dessiné en 1989 et propriété de Golfe du Morbihan – Vannes agglomération au bord de la rivière Auray, au sein du Parc Naturel Régional du Golfe du Morbihan, le Golf de Baden – Golfe du Morbihan – Vannes agglomération est un parcours varié dont on ne se lasse pas, tant à le jouer qu’à l’admirer.</Text>

            <Weather />

            <View style={[styles.buttonsContainer, styles.borderBottom]}>

              <View style={styles.twoButtons}>
                <TouchableOpacity style={[styles.buttons, {backgroundColor: '#2ba9bc'}]} onPress={() => ( setPlayers(''), setSelectedDate(''), setSelectedHour(''), navigation.navigate('DepartResa'))}>
                  <Text style={[styles.buttonText, {color: '#fff'}]}>Réserver un Départ</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttons, {backgroundColor: 'rgba(37, 150, 190, 0.1)'}]} onPress={() => ( setPlayers(''), setSelectedDate(''), setSelectedHour(''), navigation.navigate('CoursResa'))}>
                  <Text style={[styles.buttonText, {color: '#2ba9bc'}]}>Réserver un Cours</Text>
                </TouchableOpacity>
              </View>


                <TouchableOpacity style={[styles.cardButton]} onPress={() => ( setPlayers(''), setSelectedDate(''), setSelectedHour(''), navigation.navigate('ScoreSetup'))}>
                  <Text style={[styles.buttonText, {color: '#2ba9bc'}]}>Lancer une Partie</Text>
                </TouchableOpacity>


            </View>

            <Text style={styles.bold}>Infrastructure & Options</Text>

            <View style={[styles.ammenities, styles.borderBottom]}>

                {ammenitiesList.map((ammenity) => {
                          return (
                              
                              <View key={ammenity.id} style={styles.card} >

                                    <Text style={styles.ammenityName}>{ammenity.name}</Text>

                                    <View style={styles.ammenityIconContainer}>
                                      <MaterialCommunityIcons name={ammenity.icon} style={styles.ammenityicon} />
                                    </View>
                                  
                              </View>

                              )
                          })}

            </View>

            <View style={[styles.mapContainer]}>

                <Text style={styles.bold}>Adresse & Contact</Text>


                <MapView  style={styles.map} initialRegion={{
                    latitude: 47.65597871251597,
                    longitude: -3.1085282980899756,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>

                    <Marker
                        coordinate={{latitude: 47.65597871251597, longitude: -3.1085282980899756}}
                        image={require("../../assets/Logos/pin.png")}
                      />

                  </MapView>
                

            </View>
            


        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#faf8f7",
        paddingTop:StatusBar.currentHeight + 30
      },
      borderBottom: {
        borderBottomWidth: 1,
        borderColor: '#e9ebf0',
        marginBottom: 20,
        paddingBottom: 20,
      },
      bold: {
        fontWeight: '700',
        fontSize: 18,
        marginHorizontal: 25
      },

      golfName: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      IMGContainer: {
        position: 'relative',
        width: '90%',
        height: 200,
        marginHorizontal: '5%',
        marginVertical: 10,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 3,
      },
      golfIMG: {
        height: 197,
        marginVertical: 1,
        width: '99%',
        marginHorizontal: '0.5%',
        borderRadius: 15,
      },


      belowTitle: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5
      },
      stars: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
      },
      starIcon: {
        color: "#fca741",
        fontSize: 18,
        marginHorizontal: 5
      },
      rate: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'grey'
      },
      flatlist: {
        display: 'flex',
        width: 140,
        backgroundColor: 'blue'
      },
      profilePic: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 5
      },


      description: {
        paddingHorizontal: '5%',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 20,
      },


      buttonsContainer: {
        width: '100%',
        marginBottom: 10, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
      buttons: {
        width: '100%',
        height: 60,
        paddingHorizontal: 30,
        marginVertical: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      cardButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 130,
        borderRadius: 15,
        paddingHorizontal: 10,
        textAlign: 'center',
        marginLeft: 10,
        borderWidth: 4,
        borderColor: '#2ba9bc',
      },


      ammenities: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 30,
        rowGap: 10,
        marginTop: 10
      },
      card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      },
      ammenityName: {
        fontSize: 16,
        fontStyle: 'italic',
        opacity: .7
      },
      ammenityIconContainer: {
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 10
      },
      ammenityicon: {
        fontSize: 40,
        color: 'gray'
      },


      map: {
        width: '100%',
        height: 200,
        marginTop: 10,
      }
})