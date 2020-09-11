import React, { Component ,useState} from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import CustomHeader from '../../navigations/CustomHeader';
import CustomInput from '../../components/CustomInput';
import { TextInput } from 'react-native-gesture-handler';
import BlackButton from '../../components/BlackButton';


const ForgetPassword=(props)=>{

    const [email,setEmail]=useState();

    const [isResetModalActive,setIsResetModalActive]=useState();

    const onSubmit=()=>{

        setIsResetModalActive(true);
    }
    return (

        <View style={{flex:1,backgroundColor:'white',}}>


            <CustomHeader title='Forget Password' navigation={props.navigation} />


            <View style={styles.container}>


    <Text style={styles.heading}>Enter Your Email Id to Find{'\n'}Account</Text>

    <Text style={styles.logintxt}>E-Mail</Text>

<TextInput
value={email}
onChangeText={(text)=>setEmail(text)}
placeholder={"example@gmail.com"}
style={styles.input} />


<BlackButton title="Submit" onPress={()=>{onSubmit()}} />


                </View>



{
isResetModalActive?<Modal 
onRequestClose={()=>{setIsResetModalActive(false)}}
transparent={true}
animationType="fade"
backgroundColor='black'
>

    <View style={styles.modalBackground}>

<View style={styles.modalInnerContainer}>


    
<Text style={styles.text}>A LInk to Reset Your Password{'\n'}has been sent to your registered{'\n'}email account</Text>


<BlackButton title='OK' onPress={()=>setIsResetModalActive(false)} />

    </View>

</View>
    </Modal>:null

}

            </View>

    )

}

const styles=StyleSheet.create({

    container:{
        flex:1,
       justifyContent:'center',
       padding:30,
    
    },
    logintxt:{
        fontSize:20,

      
        marginTop:5,
        marginBottom:5,
    },
    heading:{
        textAlign:'center',
        fontSize:20,
        marginBottom:20,

    },
    input:{

        borderBottomColor:'gray',
        borderBottomWidth:1,
        padding:5,
        marginBottom:20,

    },

    modalInnerContainer:{
        backgroundColor:'white',
        width:'90%',
       borderRadius:20,
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000080'
      },
      text:{
          margin:10,
          marginTop:30,
          textAlign:"center",
          fontSize:18,
      },

})


export default ForgetPassword