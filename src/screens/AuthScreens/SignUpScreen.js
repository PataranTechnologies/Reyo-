import React, { Component, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BlackButton from '../../components/BlackButton';
import SimpleButton from '../../components/SimpleButton'
import CustomInput from '../../components/CustomInput';
import GrayButton from '../../components/GrayButton'
import CustomLoginButton from '../../components/CustomLoginButton';

const SignUpScreen=(props)=>{

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const onRegister=()=>{
        props.navigation.navigate('RegisterScreen');
    }
    return (
        <View style={styles.container}>


            <View style={styles.bottomView}>

                <Text style={styles.welcomeText}>Welcome Back!</Text>
                <Text style={styles.loginMessage}>Login to continue</Text>
               
               <View style={styles.authButtonsRow}>

                   <CustomLoginButton type='facebook' onPress={()=>{}} />
                   <CustomLoginButton type='apple' onPress={()=>{}}/>
                   <CustomLoginButton  type='google' onPress={()=>{}}/>


                   </View>

                   <Text style={styles.orText}>or connect with your email</Text>
           

<Text style={styles.logintxt}>EMAIL</Text>
<CustomInput
secureTextEntry={false}
value={email}
placeholder={"johnSmith@gmail.com"}
onChangeText={(text)=>setEmail(text)}
/>
<Text style={styles.logintxt}>PASSWORD</Text>
<CustomInput 
secureTextEntry={true}
value={password}
placeholder={"*******"}
onChangeText={(text)=>setPassword(text)}/>

<BlackButton title='Login' onPress={()=>{}} />
<Text onPress={()=>props.navigation.navigate("ForgetScreen")} style={styles.forgotPassword}>Forgot Password?</Text>
<GrayButton title='Create an Account' onPress={()=>{onRegister()}}/>
<View style={{margin:3,}}></View>
<SimpleButton title='Continue as Guest' onPress={()=>{props.navigation.navigate("GuestMode")}} />

                </View>


            </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    bottomView:{

        position:"absolute",
        bottom:0,
        left:0,
        right:0,

        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:'white',
        padding:25,
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

    welcomeText:{
        fontSize:28,
        fontWeight:'bold',
    },
    loginMessage:{
        fontSize:15,
        color:'#696969',
        marginTop:3,
    },
    authButtonsRow:{
        height:70,
        flexDirection:"row",
      marginTop:5,
        flex:1,
    },
    orText:{
        textAlign:'center',
        color:'#696969',
        marginTop:5,
        marginBottom:5,
    },
    logintxt:{
        fontSize:14,

        fontWeight:'bold',
        marginTop:5,
        marginBottom:5,
    },
    forgotPassword:{

        textAlign:"center",
        marginTop:5,
        fontSize:15,
        marginBottom:10,
    },
})

export default SignUpScreen