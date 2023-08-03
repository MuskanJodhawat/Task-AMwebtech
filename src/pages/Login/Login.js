import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import axios from 'axios'

const Login=()=>{
    const [showError,setShowError]=useState(false);
    const [text,setText]=useState({
        email:'',
        password:''
    })

    const loginData=()=>{
        if(text.email && text.password){
            setShowError(false)
            const body={email: text.email, password: text.password}
            axios.post('http://localhost:3000/login', body).then((res)=>{
                console.log(res)
            }).catch((e)=>{
                console.log(e)
            })
        }else{
            setShowError(true)
        }
    }
    return(
    <View >
        <View style={styles.headingView}>
        <Text style={styles.heading}>LOGIN</Text>
        </View>
        <View>
        <Text style={styles.TextLabel}>Email</Text>
        <TextInput
        style={styles.input}
        value={text.email}
        placeholder="Enter Email"
        onChange={(dt)=>{setText({email:dt, password: text.password})}}
        >
       </TextInput>
        {showError && !text?.email && (<Text style={styles.error} >please enter email</Text>)}
        <Text style={styles.TextLabel}>Password</Text>
        <TextInput
        style={styles.input}
       value={text.password}
       placeholder="Enter Password"
       secureTextEntry={true}
       onChange={(dt)=>{setText({password:dt, email: text.email})}}
      >
    </TextInput>
{showError && !text.password && (<Text style={styles.error}>please enter password</Text>)}
        </View>
        <View style={styles.button}>
            <Button title="Submit" onPress={loginData}></Button>
        </View>
    </View>
    )
}
export default Login;

const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    headingView:{
    justifyContent:'center',
    alignItems:'center',
    padding:10
},
    heading:{
    fontSize:40,
    color:'blue',
    fontWeight:'bold'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      TextLabel:{
        fontSize:25,
        fontWeight:'bold',
        padding:15
      },
      error:{
        color:'red',
        fontSize:12,
        padding:5
      },
      button:{
        padding:10
      }
})