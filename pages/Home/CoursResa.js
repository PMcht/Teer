import React, { Component, useState } from "react";
import { Button, View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, useWindowDimensions, TouchableOpacity, Image, Easing, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { persons } from "../../utils/json/persons";
import { departsList, sortDepart } from "../../utils/json/departsList";
import { GolfAttributes } from "../../utils/Lists/Golfs";
import { SelectCountry } from "react-native-element-dropdown";

import Calendar, { Hours } from "../../components/DatePicker";
import { createNativeWrapper } from "react-native-gesture-handler";


export default function CoursResa({navigation, route, golf, players, setPlayers, selectedDate, setSelectedDate, selectedHour, setSelectedHour}) {

  // Localisation
  let golfID = GolfAttributes.filter(({name}) => golf.includes(name))

  //Players
  let personToMap = persons.filter(({name}) => players.includes(name))

  // Theme
  const slides = [
    {
      id:1,
      title: 'Approches'
    },
    {
      id:2,
      title: 'Driving'
    },
    {
      id:3,
      title: 'Putting'
    },
    {
      id:4,
      title: 'Fers'
    },
    {
      id:5,
      title: 'Effets'
    },
    {
      id:6,
      title: 'Bunkers'
    },
  ]
  const [pressStatus, setPressStatus] = useState('')

  const {height, width, scale, fontScale} = useWindowDimensions();
  const pushNewDepart = () => { 

    
    departsList.push({
    id: departsList.length + 1,
    golfName: golfID[0].name,
    golfIMG: golfID[0].img,
    golfAddress: golfID[0].region,
    type: 'Cours',
    date: selectedDate,
    hour: selectedHour,
    with: players,
  },)}

  return (
    <View style={[styles.scrollView , {flex: 1}]}>
    <ScrollView>
    <View style={{minHeight: height, width: width, paddingVertical: 30, paddingHorizontal: 20, backgroundColor: "#fff"}}>

      

        <View style={[styles.course, styles.line]}>
            <Text style={[styles.bold, {marginBottom: 20}]}>
              Localisation
            </Text>

            {golf == '' ? 

                  <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('GolfList')}>
                      <Text style={styles.SelectButton}>Sélectionner un golf</Text>
                  </TouchableOpacity>
                
                  :     

                  <TouchableOpacity style={styles.flex} onPress={() => navigation.navigate('GolfList')}>

                    <Image
                        style={styles.img}
                        source={golfID[0].img}
                        resizeMode="cover"
                      />

                    <View style={styles.info}>
                      <Text style={styles.bold}>Golf de {golfID[0].name}</Text>
                      <Text style={[styles.thin, {marginTop: 10}]}>{golfID[0].region}</Text>
                      <View style={[styles.flex, {marginTop: 10}]}>
                        <Text style={styles.space}>Handicap <Text style={styles.param}>22</Text></Text>
                        <Text style={styles.space}>Par <Text style={styles.param}>22</Text></Text>
                        <Text >Slope <Text style={styles.param}>22</Text></Text>
                      </View>
                    </View>

                  </TouchableOpacity>
              }
        </View>

        {golf == '' ? <></> : 
        

        
        <View style={[styles.players, styles.line]}>
          
            
            <View style={styles.playersTitle}>
              <View>
                  <Text style={[styles.bold]}>
                    Professeur
                  </Text>
              </View>
              {players.length == 1 ? <></> : 
              <TouchableOpacity style={styles.addPlayer} onPress={() => navigation.navigate('ChoosePlayer', {friendType: 'Professor'})}><Text>Choisir mon coach</Text></TouchableOpacity>
              }
              
            </View>

            {personToMap.map((person) => {
       
              return (
                <View key={person.id} style={[styles.flex, styles.person]}>
                  <Image
                    style={styles.profilePic}
                    source={person.img}
                    resizeMode="cover"
                  />
                  
                  <View>
                    <Text style={styles.bold}>{person.name}</Text>
                    <View style={[styles.flex, {alignItems: "center", marginTop: 5}]}>
                      <Text style={styles.index}>Jaune</Text>
                      <Text style={styles.handicap}>Index: {person.index}</Text>
                    </View>
                  </View>
                     <SelectCountry
                        style={styles.dropdown}
                        selectedTextStyle={styles.selectedTextStyle}
                        placeholderStyle={styles.placeholderStyle}
                        imageStyle={styles.imageStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        maxHeight={200}
                        data={[{id:"1", name:'Désinscrire'}]}
                        valueField="id"
                        labelField="name"
                        imageField="img"
                        placeholder=''
                        onChange={item => {
                           setPlayers(players.filter(item => item !== person.name))
                        }}
                        renderRightIcon={() => (
                          <MaterialCommunityIcons name="dots-vertical" style={styles.more} />
                          )}
                   />
                </View>
              )
            })}

        </View>}

        {players == '' ? <></> : <View style={[styles.timing, styles.line]}>

            <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />

            {selectedDate == '' ? <></> : <Hours setSelectedHour={setSelectedHour} selectedHour={selectedHour} />}

        </View>}
        


        {selectedHour == '' ? <></> : 
        
        <View style={[styles.players]}>                  
          <View style={styles.playersTitle}>
              <Text style={[styles.bold]}>
                Theme du Cours
              </Text>
          </View>

        <View style={styles.themeContainer}>
            {slides.map((item) => {

              return (

                <TouchableOpacity style={[styles.themes, pressStatus === item.title && { backgroundColor: "#2ba9bc" }]} key={item.id} onPress={() => setPressStatus(item.title)}>
                    <Text style={[styles.themeText, pressStatus === item.title && { color: '#fff' }]}>{item.title}</Text>
                </TouchableOpacity>
      
            )})}
        </View>
        </View>
        }

    </View>
    </ScrollView>

    
    <View style={[styles.modif, {width: width}]}>

<Pressable onPress={() => {navigation.goBack() }} style={[styles.cancel, {borderColor: "#ba2504"}]}><MaterialCommunityIcons style={[styles.cancelIcon, {color: "#ba2504"}]} name='chevron-left' /></Pressable>


    <Pressable onPress={() => {
      if(players !== ''){
        pushNewDepart();  navigation.goBack(); sortDepart()
      }
      
      }} style={[styles.approve, players !== '' && { backgroundColor: "#2ba9bc" }, players == '' && { backgroundColor: "grey" }]}><Text style={[styles.bold, {color: "#fff"}]}>Confirmer</Text></Pressable>


</View>
    </View>
  );
}




const styles = StyleSheet.create({

  themeContainer:{
    display: "flex",
    alignitems: "center",
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  themes:{
    borderWidth: 1,
    borderColor: "#2ba9bc",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  themeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  dropdown: {
    height: 50,
    width: "40%"
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
  },
  thin: {
    fontWeight: "400",
    color: "gray"
  },
  flex: {
    display: "flex",
    flexDirection: 'row'
  },
  SelectButton:{
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 20
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#e9ebf0",
    paddingBottom: 20 
  },
  img: {
    width: 80,
    height: 100,
    marginRight: 20,
    borderRadius: 10
  },
  info: {
    width: 250
  },
  param: {
    fontWeight: "bold"
  },
  space: {
    marginRight: 20
  },
  timing: {
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
  boldTiming: {
    fontWeight: "bold",
  },
  players: {
    paddingTop: 20,
  },

  playersTitle:{
    display: "flex",
    alignItems: 'flex-start',
    justifyContent:'space-between',
    flexDirection: 'row',
    marginBottom: 20
  },
  addPlayer: {
    marginTop: 10,
    color: '#2ba9bc'
  },

  person: {
    marginBottom: 10,
    position: 'relative'
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 15
  },
  index: {
    backgroundColor: "#ffc800",
    color: "#fff",
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 100,
    marginRight: 10
  },
  more: {
    position: "absolute",
    right: 0,
    top: 5,
    fontSize: 20
  },
  modif: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: 'row'
  },
  approve: {
    marginBottom: 10,
    width: '80%',
    paddingVertical: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cancel: {
    marginBottom: 10,
    width: '15%',
    paddingVertical: 11,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2
  },
  cancelIcon:{
    fontSize: 30
  }
});