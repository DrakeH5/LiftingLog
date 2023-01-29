import { Text, View, Modal, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import WorkoutHistoryModal from "./workoutHistoryModal.js"
import { TouchableOpacityComponent } from 'react-native';

export default function WorkoutPage() {

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
            <WorkoutHistoryModal></WorkoutHistoryModal>
        </View>
    )
}

