import { Text, View, Modal, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import WorkoutHistoryModal from "./workoutHistoryModal.js"
import AddWorkoutModal from "./addWorkoutModal.js"
import { TouchableOpacityComponent } from 'react-native';

export default function WorkoutPage({userName}) {

    const mainStyle = {
        backgroundColor: "rgb(15,15,15)", 
        height: "100%", 
        zIndex: -1,
    }

    const generalTextStyle = {
        color: "white",
        fontSize: "30%",
    }

    const popupStyle = {
        position: "relative", 
        top: "50%", 
        backgroundColor: "white",  
        justifyContent: "center", 
        alignItems: "center", 
        margin: "10%"
    }
   
    return (
        <View style={mainStyle}>
            <Image source={require('./deadliftLogo.png')} style={{position: 'absolute',alignSelf: 'center', bottom: '-5%', width: "100%", height: "100%"}} resizeMode="contain" />
            <AddWorkoutModal userName={userName}></AddWorkoutModal>
            <WorkoutHistoryModal userName={userName}></WorkoutHistoryModal>
        </View>
    )
}

