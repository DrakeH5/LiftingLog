import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function SignedOutPage() {

  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={{position: "absolute", top: "40%", left: "30%"}}>
        <TextInput onChangeText={text => setUsername(text)} placeholder="Username" style={{padding: 20}} id="userName"></TextInput>
        <TextInput onChangeText={text => setPassword(text)} placeholder="Password" style={{padding: 20}} id="password"></TextInput>
        <Button title="Log In" />  
        <Button title="Sign Up" />  
    </View>
  )
}
