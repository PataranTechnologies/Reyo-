import React, { Component,useState } from 'react';
import { View, StyleSheet,Text, ImagePropTypes } from 'react-native';
import CustomInput from '../../components/CustomInput';
import { ScrollView } from 'react-native-gesture-handler';
import BlackButton from '../../components/BlackButton';
import CustomHeader from '../../navigations/CustomHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomPasswordInput from '../../components/CustomPasswordInput'
import EmailVerificationScreen from './EmailVerificationScreen';

const RegisterScreen=(props)=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [age,setAge]=useState();
    const [verifyModalActive,setVerifyModalActive]=useState(false);
    let ageList=[]
    for (var i=1;i<=100;i++)
    {
        
        ageList.push({
            label:i.toString(),
            value:i.toString(),
        });
    }

    const onSubmit=()=>{

        setVerifyModalActive(true)
    }
    const onOk=()=>{
        setVerifyModalActive(false)

        props.navigation.navigate("LocationScreen");
    }

    return (

        <View style={styles.container}>
            <CustomHeader title="Register" navigation={props.navigation} />
<ScrollView style={{marginTop:20,}}>
<Text style={styles.logintxt}>First Name</Text>
<CustomInput
secureTextEntry={false}
value={email}
placeholder={"Name"}
onChangeText={(text)=>setEmail(text)}
/>
<Text style={styles.logintxt}>Surname</Text>
<CustomInput
secureTextEntry={false}
value={email}
placeholder={"surname"}
onChangeText={(text)=>setEmail(text)}
/>

<Text style={styles.logintxt}>E-Mail</Text>
<CustomInput
secureTextEntry={false}
value={email}
placeholder={"johnSmith@gmail.com"}
onChangeText={(text)=>setEmail(text)}
/>

<Text style={styles.logintxt}>Age Group</Text>
<View>
<DropDownPicker
    items={ageList}
    defaultValue={"18"}
    containerStyle={{height: 50}}
    style={{backgroundColor: 'white'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item =>setAge(item.value)}
/>
</View>

<Text style={styles.logintxt}>Password</Text>
<CustomPasswordInput 
value={password}
placeholder={"*******"}
onChangeText={(text)=>setPassword(text)}/>

<Text style={styles.logintxt}>Confirm Password</Text>
<CustomPasswordInput
value={email}
placeholder={"*******"}
onChangeText={(text)=>setEmail(text)}
/>


<BlackButton title='signup' onPress={()=>{onSubmit()}} />


<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:15,}}>
<Text style={{color:'gray',fontSize:16}}>Already have an account ! </Text>

<Text onPress={()=>{props.navigation.goBack()}} style={{color:'black',fontSize:17}}>Login</Text>

    </View>


</ScrollView>

{
    verifyModalActive?<EmailVerificationScreen
    onPressOk={()=>onOk()}
    />:null
}
            </View>
    )
}
const styles=StyleSheet.create({

    container:{
        flex:1,
        padding:20,
        paddingTop:0,
        backgroundColor:'white',
    },
    logintxt:{
        fontSize:14,

        fontWeight:'bold',
        marginTop:5,
        marginBottom:5,
    },
})

export default RegisterScreen;