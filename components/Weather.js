import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {  weatherList } from '../utils/json/weatherList'
import moment from 'moment'

export default function Weather() {

  let days = [];
  let daysRequired = 7

  for (let i = 1; i <= daysRequired; i++) {
      {
          days.push( (moment().add(i, 'days').format('ddd')).charAt(0).toUpperCase() + (moment().add(i, 'days').format('ddd')).slice(1) )
      }
      
  }


  return (
    <View style={styles.eventContainer}>

                <FlatList
                      data={weatherList}
                      contentContainerStyle={styles.flatlist}
                      removeClippedSubviews={true} 
                      renderItem={({ item }) => 

                      <View>

                        <Text style={{textAlign: 'center', fontStyle: 'italic'}}>{days[item.id]}</Text>
                      
                        <View style={styles.event} key={item.id}>

                            <Image
                              style={styles.weatherIcon}
                              source={item.weather}
                              resizeMethod='resize'
                            />
                            <Text style={styles.temp}>{item.temp}°</Text>

                        </View>
                      </View>
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
  )
}

const styles = StyleSheet.create({
      flatlist: {
        overflow: 'visible',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 80,
        width: '100%',
        marginBottom: 20
      },
      event: {
        width: 55,
        height: 55,
        marginHorizontal: 5,
        position: 'relative',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
    
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 3,
      },
      weatherIcon: {
        width: 30,
        height: 30,
        borderRadius: 10
      },
      temp: {
        fontSize: 10,
        fontStyle: 'italic'
      }
 
})