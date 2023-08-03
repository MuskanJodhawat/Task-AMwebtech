import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

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
        <View>
        <Text>Email</Text>
        <TextInput
        style={styles.input}
        value={text.email}
        placeholder="Enter Email"
        onChange={(dt)=>{setText({email:dt, password: text.password})}}
        >
       </TextInput>
        {showError && !text?.email && (<Text >please enter email</Text>)}
        <Text>Password</Text>
        <TextInput
        style={styles.input}
       value={text.password}
       placeholder="Enter Password"
       onChange={(dt)=>{setText({password:dt, email: text.email})}}
      >
    </TextInput>
{showError && !text.password && (<Text>please enter mobile</Text>)}
        </View>
        <View>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      TextLabel:{
        fontSize:15,
        fontWeight:'bold'
      },
      error:{
        color:'red',
        fontSize:12
      }
})