import { useState } from 'react'; 
import { Image, Modal, View, Button, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react'
import { holeslist } from '../utils/json/holesList';
import HoleSelect from '../pages/ScoreCard/HoleSelect';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottomDrawer({setHole, hole}) {

    // We need to get the height of the phone and use it relatively, 
    // This is because height of phones vary
    const windowHeight = Dimensions.get('window').height;

    // This state would determine if the drawer sheet is visible or not
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    // Function to open the bottom sheet 
    const handleOpenBottomSheet = () => {
    setIsBottomSheetOpen(true);
    };

    // Function to close the bottom sheet
    const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
    };

  return (
        <View style={styles.buttons}>

            <TouchableOpacity onPress={handleOpenBottomSheet} style={styles.button}>
                <MaterialCommunityIcons style={[styles.iconText, {color: '#2ba9bc'}]} name='golf' />
                <Text style={[styles.buttonText, {color: '#2ba9bc'}]}> Changer de trou</Text>
            </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    // We use the state here to toggle visibility of Bottom Sheet 
                    visible={isBottomSheetOpen}
                    // We pass our function as default function to close the Modal
                    onRequestClose={handleCloseBottomSheet} >

                        <View style={[styles.bottomSheet, { height: windowHeight * 0.5 }]}>

                            <HoleSelect toClose={handleCloseBottomSheet} setHole={setHole} />

                            <TouchableOpacity style={styles.back} onPress={handleCloseBottomSheet}>
                                <Text style={styles.backText}>Revenir en arrière</Text>
                            </TouchableOpacity>

                        </View>

                </Modal>

            <TouchableOpacity style={[styles.button, {backgroundColor: '#2ba9bc'}]} onPress={() => setHole(holeslist[hole.holeNB])}>
            <Text style={[styles.buttonText, {color: '#fff'}]}>Prochain trou</Text>
            <MaterialCommunityIcons style={[styles.iconText, {color: '#fff'}]} name='chevron-right' />
            </TouchableOpacity>

        </View>
  )
}

const styles = StyleSheet.create({
 

    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 23,
        paddingHorizontal: 25,
        bottom: 0,
        borderWidth: 1,
        borderColor: 'grey'
    },
    back:{
        borderWidth: 1,
        borderColor: 'red',
        opacity: .5,
        borderRadius: 20
    },
    backText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    
      buttons:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        flexDirection: 'row',
        width: '100%',
        height: '10%',
      },
      button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row',
        borderWidth: 1.5, 
        borderColor: '#2ba9bc', 
        paddingVertical: 12, 
        borderRadius: 15,
        width: '45%'
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    iconText: {
      fontSize: 24,
      fontWeight: 'bold'
    }
    })