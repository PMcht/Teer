import React, { Component, useState } from "react";
import { Button, View, Text, SafeAreaView, ScrollView, StyleSheet, TextInput, useWindowDimensions, TouchableOpacity, Image, Easing, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { persons } from "../../utils/json/persons";
import { departsList, sortDepart } from "../../utils/json/departsList";
import { GolfAttributes } from "../../utils/Lists/Golfs";
import { SelectCountry } from "react-native-element-dropdown";

import Calendar, { Hours } from "../../components/DatePicker";


export function DepartResa({navigation, route, golf, players, setPlayers, selectedDate, setSelectedDate, selectedHour, setSelectedHour}) {

  // Localisation
  let golfID = GolfAttributes.filter(({name}) => golf.name.includes(name))

  //Players
  let personToMap = persons.filter(({name}) => players.includes(name))

  //Date



  const {height, width, scale, fontScale} = useWindowDimensions();
  const pushNewDepart = () => { 

    
    departsList.push({
    id: departsList.length + 1,
    golfName: golfID[0].name,
    golfIMG: golfID[0].img,
    golfAddress: golfID[0].region,
    type: 'Parcours',
    date: selectedDate,
    hour: selectedHour,
    with: players,
  },)}

  return (
    <View style={[styles.scrollView , {flex: 1}]}>
    <ScrollView>
    <View style={{minHeight: height-200, width: width, paddingVertical: 30, paddingHorizontal: 20, backgroundColor: "#faf8f7"}}>

      

        <View style={[styles.course, styles.line]}>
            <Text style={[styles.bold, {marginBottom: 20}]}>
              Localisation
            </Text>

            <View style={styles.flex}>

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

            </View>
              
        </View>

        {golf == '' ? <></> : <View style={[styles.players, styles.line]}>
          
            
          <View style={styles.playersTitle}>
            <View>
                <Text style={[styles.bold]}>
                  Partenaires
                </Text>
                <Text style={[styles.thin]}>
                  Jusqu'à 3 joueurs
                </Text>
            </View>
            {players.length == 3 ? <></> : 
            <TouchableOpacity style={styles.addPlayer} onPress={() => navigation.navigate('ChoosePlayer', {friendType: 'Friends'}) }><Text>Ajouter un joueur</Text></TouchableOpacity>
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

         <View style={[styles.timing, styles.line]}>

            <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />

            {selectedDate == '' ? <></> : <Hours setSelectedHour={setSelectedHour} selectedHour={selectedHour} />}

        </View>
        

    </View>
    </ScrollView>

    <View style={[styles.modif, {width: width}]}>

        <Pressable onPress={() => {navigation.goBack() }} style={[styles.cancel, {borderColor: "#ba2504"}]}><MaterialCommunityIcons style={[styles.cancelIcon, {color: "#ba2504"}]} name='chevron-left' /></Pressable>


            <Pressable onPress={() => {
              if(selectedHour !== ''){
                pushNewDepart();  navigation.goBack(); sortDepart()
              }
              
              }} style={[styles.approve, selectedHour !== '' && { backgroundColor: "#2ba9bc" }, selectedHour == '' && { backgroundColor: "grey" }]}><Text style={[styles.bold, {color: "#fff"}]}>Valider mon départ</Text></Pressable>


        </View>
    </View>
  );
}




const styles = StyleSheet.create({
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
    flexDirection: 'row',
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
    borderWidth: 2,
    backgroundColor: '#faf8f7'
  },
  cancelIcon:{
    fontSize: 30
  }
});