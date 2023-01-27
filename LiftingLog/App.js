import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Image} from 'react-native'; 
import {Button} from 'react-native'; 
import DietPage from "./dietPage.js"

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
  const buttonStyles = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: "-15%",
  }

  const [page, setPage] = useState('home')


  if(page=="home"){
    return (
      <View style={viewStyle}>
        <Text>Lifting Log!</Text>
        <Image style={mainLogoStyle} source={require('./mainLogo.png')} />
        <StatusBar style="auto" /> 
        <View style={buttonStyles}>
        <TouchableOpacity onPress={() => {setPage("workouts")}}>
          <Image source={require('./workoutIcon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setPage("diet")}}>
          <Image source={require('./dietIcon.png')} />
        </TouchableOpacity>
        </View>
      </View>
    );
  } else if(page == "workouts"){
    <Text>Workouts</Text>
  } else if(page == "diet"){
    <DietPage></DietPage>
  } else {
    return <Text>Sorry, we can not find that page!</Text>
  }

}

