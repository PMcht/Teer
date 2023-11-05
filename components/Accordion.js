import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <TouchableOpacity style={styles.accordion} onPress={()=>this.toggleExpand()}>
            <TouchableOpacity style={styles.button} onPress={()=>this.toggleExpand()}>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
                {
                this.state.expanded &&
                
                    <Text>test</Text>

                }
            

            
       </TouchableOpacity>
    )
  }



  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    accordion: {
        display: "flex",
        justifyContent: 'center',
        alignContent: 'center',
        width: '90%',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: '5%',
        alignItems:'center',
        backgroundColor: "#fff",
        borderRadius: 15,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    
});