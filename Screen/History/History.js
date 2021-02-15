import React, {Component} from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';



class History extends Component {
  
      state = {
        history : ""
      }



  handletext = (text) => {
    this.setState =({
        history : text
    })
  }

    render() {
       
        return (
            
            <View style = {styles.container}>

                <Text style = {styles.Judul}>HISTORY</Text>
                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handletext}/>
                <Text></Text>

                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handletext}/>
                 <Text></Text>

                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handletext}/>
                 <Text></Text>

                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handletext}/>     

            </View>
        )
    }
}

export default History;

const styles = StyleSheet.create({
    container : {
        paddingTop: 23,
        // marginLeft :30
        marginTop : 30
    },
    Judul : {
        fontWeight : 'bold',
        fontSize : 40,
        color : 'black',
        textAlign : 'center',
        marginBottom :50

    },
    input : {
     height : 60,
     borderColor : 'lightblue',
     borderWidth  :3,
     width :320,
     marginLeft  :35,
    
    },
   
})