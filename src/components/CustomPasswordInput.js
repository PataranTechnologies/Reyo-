import React, { Component, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';


const CustomInput=(props)=>{

    const [hidden,setHidden]=useState(true)
    return (

        <View style={[styles.input,props.style]}>
        <TextInput 
        style={styles.inputField}
        secureTextEntry={hidden}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text)=>{props.onChangeText(text)}}
        />
        <Icon onPress={()=>{setHidden(!hidden)}} name={hidden?"ios-eye-off-outline":"ios-eye-outline"} style={styles.eyeIcon} />
        </View>
    )

}
const styles=StyleSheet.create({

    input:{
        borderColor:'#DCDCDC',
        borderWidth:1,

        borderRadius:5,
        marginTop:5,
        marginBottom:5,
        flexDirection:"row",
        alignItems:"center",
        
    },
    eyeIcon:{
        fontSize:25,
        position:"absolute",
        right:10,
    },
    inputField:{
        padding:10,
        flex:1,
        paddingLeft:20,

    },


})

export default CustomInput