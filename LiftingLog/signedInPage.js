import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Image} from 'react-native'; 
import {Button} from 'react-native'; 
import DietPage from "./dietPage.js"
import WorkoutPage from './workoutPage.js';

export default function SignedInPage({userName}) {
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
  const userNameStyle = {
    color: "grey",
    position: "absolute",
    right: "10%",
    top: "10%",
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
        <Text style={userNameStyle}>{userName}</Text>
      </View>
    );
  } else if(page == "workouts"){
    return (
      <View>
        <TouchableOpacity style={{marginTop: "10%", position: "absolute", zIndez: 1}} onPress={() => {setPage("home")}}>
          <Image source={require('./homeIcon.png')} />
        </TouchableOpacity>
        <WorkoutPage></WorkoutPage>
      </View>
    )
  } else if(page == "diet"){
    return (
      <View>
        <TouchableOpacity style={{marginTop: "10%", position: "absolute", zIndez: 1}} onPress={() => {setPage("home")}}>
          <Image source={require('./homeIcon.png')} />
        </TouchableOpacity>
        <DietPage userName={userName}></DietPage>
      </View>
    )
  } else {
    return <Text>Sorry, we can not find that page!</Text>
  }

}

