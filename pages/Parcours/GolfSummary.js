import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { ScrollView } from 'react-native'
import { StatusBar } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function GolfSummary({route, golf, setPlayers, setSelectedDate, setSelectedHour}) {

  const navigation = useNavigation();

  return (
    <View style={[styles.mainContainer, {flex: 1}]}>

        <Text style={styles.golfName}>Golf de {golf.name}</Text>

        <ScrollView>

            <View style={styles.IMGContainer}>
              <Image
                  style={styles.golfIMG}
                  source={golf.img}
                />
            </View>

            <Text style={[styles.description, styles.borderBottom]} numberOfLines={3}>Dessiné en 1989 et propriété de Golfe du Morbihan – Vannes agglomération au bord de la rivière Auray, au sein du Parc Naturel Régional du Golfe du Morbihan, le Golf de Baden – Golfe du Morbihan – Vannes agglomération est un parcours varié dont on ne se lasse pas, tant à le jouer qu’à l’admirer.</Text>

            <TouchableOpacity style={[styles.buttons, {backgroundColor: '#2ba9bc'}]} onPress={() => ( setPlayers(''), setSelectedDate(''), setSelectedHour(''), navigation.navigate('DepartResa'))}>
              <Text style={[styles.buttonText, {color: '#fff'}]}>Réserver un Départ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttons, {backgroundColor: 'rgba(37, 150, 190, 0.1)'}]} onPress={() => ( setPlayers(''), setSelectedDate(''), setSelectedHour(''), navigation.navigate('CoursResa'))}>
              <Text style={[styles.buttonText, {color: '#2ba9bc'}]}>Réserver un Cours</Text>
            </TouchableOpacity>


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
        borderColor: '#e9ebf0'
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


      description: {
        paddingHorizontal: '5%',
        marginTop: 10,
        marginBottom: 20,
        paddingBottom: 20,
      },



      buttons: {
        width: '80%',
        height: 60,
        marginHorizontal: '10%',
        marginVertical: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
      }
})