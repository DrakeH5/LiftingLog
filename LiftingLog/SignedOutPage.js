import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function SignedOutPage() {

  function createAccount(){
    fetch('http:192.168.2.115:5000/createAccount', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    });
  }


  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={{position: "absolute", top: "40%", left: "30%"}}>
        <TextInput onChangeText={text => setUsername(text)} placeholder="Username" style={{padding: 20}} id="userName"></TextInput>
        <TextInput onChangeText={text => setPassword(text)} placeholder="Password" style={{padding: 20}} id="password"></TextInput>
        <Button title="Log In" />  
        <Button title="Sign Up" onPress={createAccount} />  
    </View>
  )
}
