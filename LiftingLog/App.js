import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View} from 'react-native';
import {Image} from 'react-native'; 
import {Button} from 'react-native'; 

export default function Homepage() {
  const mainLogoStyle = {
    width: "100%",
    height: "75%",
    resizeMode: 'stretch',
    top: "-10%"
  }
  const viewStyle = {
    backgroundColor: "rgb(10,10,10)",
    height: "100%"
  }

  const [page, setPage] = useState('home')


  if(page=="home"){
    return (
      <View style={viewStyle}>
        <Text>Lifting Log!</Text>
        <Image style={mainLogoStyle} source={require('./mainLogo.png')} />
        <StatusBar style="auto" /> 
        <View>
          <Button title="WORKOUT" color="white" onPress={() => {setPage("workouts")}} />
          <Button title="DIET" color="white" onPress={() => {setPage("diet")}} />
        </View>
      </View>
    );
  } else if(page == "workouts"){
    <Text>Workouts</Text>
  } else if(page == "diet"){
    <Text>Diet</Text>
  } else {
    return <Text>Sorry, we can not find that page!</Text>
  }

}

