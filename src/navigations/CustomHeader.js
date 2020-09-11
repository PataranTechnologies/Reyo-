import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const CustomHeader=(props)=>{

    const onBack=()=>{
        props.navigation.goBack(null);
    }
    return (

        <View style={styles.container}>

            
           <Icon onPress={()=>{onBack()}} style={styles.backIcon} name='chevron-back' /> 
    <Text style={styles.title}>{props.title}</Text>


            </View>
    )
}
const styles=StyleSheet.create({

    container:{
flexDirection:"row",
justifyContent:'center',
alignItems:'center',
marginBottom:10,
padding:10,

},
backIcon:{
    position:"absolute",
    left:10,
    fontSize:35,
},
title:{
    fontSize:22,
},
})

export default CustomHeader;