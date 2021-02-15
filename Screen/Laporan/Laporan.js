import React, {Component} from 'react';
import { TextInput,View,Text,StyleSheet } from 'react-native';


class Laporan extends Component {
   
handleText =(text) => {
    this.setState({nama : text})
}

   
handleAlamat =(text) => {
    this.setState({Alamat : text})
}

   
handleKeterangan =(text) => {
    this.setState({Keterangan : text})
}

    render() {
        return (
            <View style = {style.container}>
            <Text style = {style.Judul}>Name : </Text>
            <TextInput style = {style.input}
            placeholderTextColor = 'black'
            underlineColorAndroid = 'transparant'
            autoCapitalize = 'none'
            onChangeText = {this.handleText}/>
            

           <Text style = {style.Alamat}>Alamat : </Text>
            <TextInput style = {style.input2}
            placeholderTextColor = 'black'
            underlineColorAndroid = 'transparant'
            autoCapitalize = 'none'
            onChangeText = {this.handleAlamat}/> 

        <Text style = {style.Keterangan}>Keterangan : </Text>
            <TextInput style = {style.input3}
            placeholderTextColor = 'black'
            underlineColorAndroid = 'transparant'
            autoCapitalize = 'none'
            onChangeText = {this.handleKeterangan}/> 
{/* 
            <Image
        source={require('https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Image-01-512.png')}/> */}

            <Text style = {style.text}>Laporkan</Text>
           </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        marginTop : 40,
        marginLeft :30
    },
    Judul : {
        marginBottom :10
    },
    input : {
        height :20,
        borderWidth :1,
        borderColor :'black',
        width : 300
    },
    input2 : {
        height :40,
        borderWidth :1,
        borderColor :'black',
        width : 300
    },
    input3 : {
        height :50,
        borderWidth :1,
        borderColor :'black',
        width : 300,
        marginTop : -10
    },
    Alamat : {
        marginBottom :10,
        marginTop :10
    },
    
    Keterangan : {
        marginBottom :5,
        marginTop :10,
        height : 30
    },
    text : {
        marginTop :30,
        height  :100,
        width :250,
        borderColor :'black',
        borderWidth :1,
        textAlign : 'center',
        justifyContent : 'center'
    }
    
})

export default Laporan;