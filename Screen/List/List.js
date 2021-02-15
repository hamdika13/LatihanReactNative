import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {Component} from 'react';

class List extends Component {
   state = {
      email: '',
      nama : '',
      phone :'',
      address :''
      
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }

   handleNama = (text) => {
    this.setState({ nama: text })
 }

 handlePhone = (text) => {
  this.setState({ phone: text })
}
 

handleAddress = (text) => {
  this.setState({ address: text })
}
 


   render() {
      return (
         <View style = {styles.container}>
           <Text style = {Email.email} >Email :</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
        
             <Text style = {Nama.nama} >Nama :</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nama"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleNama}/>

            <Text style = {Phone.phone} >Phone :</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlePhone}/>

               
       <Text style = {Address.address}>Address :</Text>
       <TextInput style = {styles.input}
      underlineColorAndroid = "transparent"
      placeholder = "Address"
      placeholderTextColor = "black"
      autoCapitalize = "none"
      onChangeText = {this.handleAddress}/>

    <Text style = {Submit.submit}>Submit</Text>

   <TextInput style = {Press.press}>LISTT</TextInput>
   <TextInput style = {Press2.press2}>REGISTER</TextInput>
  
         </View>
      )
   }
}
export default List;

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      marginLeft :30
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'black',
      borderWidth: 1
   },
 
  
})

const Email  =StyleSheet.create ({
  email : {
    marginLeft:15
  }

})

const Nama  =StyleSheet.create ({
  nama : {
    marginLeft:15
  }

})


const Phone  =StyleSheet.create ({
  phone : {
    marginLeft:15
  }

})

const Address  =StyleSheet.create ({
  address : {
    marginLeft:15,
    // width :30
  }

})

const Submit  =StyleSheet.create ({
  submit : {
    
    marginLeft : 250,
    width : 70,
    height : 30,
    textAlign : 'center',
    backgroundColor : "lightblue",
    marginBottom : 200
  
  }

})


const Press  =StyleSheet.create ({
  press : {
    
    width:100,
    textAlign : 'center',
    textAlign :'center',
    borderColor: 'black',
    backgroundColor : '#999999'
  }

})


const Press2  =StyleSheet.create ({
  press2 : {
    textAlign : 'center',
    width:200,
    textAlign :'center',
    borderColor: 'black',
    backgroundColor : '#999999',
    marginLeft : 100,
    marginTop : -48
  }

})
