import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { departsList } from '../utils/json/departsList'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function NextEvents({setPlayers}) {

  const navigation = useNavigation();

  return (
    <View style={styles.eventContainer}>

                {departsList.length == 0 ? <Text style={styles.noEvent}>Vous n'avez pas encore réservé d'évènements</Text> : 
                <FlatList
                      data={departsList}
                      extradata={this.state}
                      contentContainerStyle={styles.flatlist}
                      renderItem={({ item }) => 
                      
                        <TouchableOpacity onPress={() => (setPlayers(departsList[departsList.indexOf(item)].with), navigation.navigate('DepartSums', {id:departsList.indexOf(item)}))} activeOpacity={.9} style={styles.event} key={item.id}>
                            <Image
                              style={styles.bgEvent}
                              source={item.golfIMG}
                              resizeMode='cover'
                            />

                            <View style={styles.resaInfo}>
                                <Text style={styles.date}>{item.date} à {item.hour}</Text>
                                <Text style={styles.golfName} numberOfLines={1} >{item.golfName}</Text>
                                <Text style={styles.type}>{item.type == "Parcours" ? '18 trous' : `Leçon de Golf`}</Text>
                                <Text style={styles.with} numberOfLines={1}>
                                  {item.with.length == 0 ? '' : item.with.map((nom, index) => ( (index ? ', ': 'Avec ') + nom ))}
                                </Text>
                            </View>

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
                        />}


              </View>
  )
}

const styles = StyleSheet.create({
    noEvent:{
        textAlign: 'center',
        marginTop: 10
      },
      flatlist: {
        overflow: 'visible',
        marginTop: 10,
        height: 135,
      },
      event: {
        width: 320,
        height: 130,
        marginHorizontal: 15,
        position: 'relative',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        flexDirection: 'row',
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
      bgEvent: {
        width: "44%",
        height: "75%",
        borderRadius: 10
      },
      resaInfo:{
        width: '40%'
      },
      date: {
        fontSize: 14,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: '#e9ebf0',
        paddingBottom: 3,
        marginBottom: 2
      },
      golfName:{
        fontSize: 20,
        fontWeight: 'bold',
      },
      type: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      with:{
        fontSize: 12,
        color: 'grey',
      },
})