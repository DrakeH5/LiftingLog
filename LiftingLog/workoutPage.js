import { Text, View, Modal, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import WorkoutHistoryModal from "./workoutHistoryModal.js"
import AddWorkoutModal from "./addWorkoutModal.js"
import PresetsModal from "./presetsModal.js"
import { TouchableOpacityComponent } from 'react-native';
import ShowWorkoutPresets from "./showWorkoutPresets.js"

export default function WorkoutPage({userName}) {

    const mainStyle = {
        backgroundColor: "rgb(15,15,15)", 
        height: "100%", 
        zIndex: -1,
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
            <ShowWorkoutPresets userName={userName}/>
            <AddWorkoutModal userName={userName}></AddWorkoutModal>
            <WorkoutHistoryModal userName={userName}></WorkoutHistoryModal>
            <PresetsModal userName={userName}/>
        </View>
    )
}

