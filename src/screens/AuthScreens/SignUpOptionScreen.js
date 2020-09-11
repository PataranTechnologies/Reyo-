import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BlackButton from '../../components/BlackButton';
import SimpleButton from '../../components/SimpleButton'


const SignUpOptionScreen=(props)=>{

    const asUser=()=>{
        
props.navigation.navigate("SignUpScreen")
    }
    const asVendor=()=>{


props.navigation.navigate("SignUpScreen")

    }

    return (
        <View style={styles.container}>


            <View style={styles.bottomView}>

                <Text style={styles.header}>Sign Up</Text>
    <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur{'\n'}adipiscing slit,sed do eiusmod tempor incidunt</Text>

<BlackButton title='As a User' onPress={()=>asUser()} />
<View style={{margin:5,}}></View>
<SimpleButton title='As a Vendor' onPress={()=>asVendor()} />

                </View>


            </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DCDCDC'
    },
    bottomView:{

        position:"absolute",
        bottom:0,
        left:0,
        right:0,

        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:'white',
        padding:20,
        paddingBottom:30,
    },
    header:{
        alignSelf:'center',
        fontSize:23,
    },
    text:{
        fontSize:14,
        textAlign:'center',
        margin:10,
        color:'black',
        marginBottom:25,
    },
})

export default SignUpOptionScreen