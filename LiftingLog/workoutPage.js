import { Text, View, Modal, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import WorkoutHistoryModal from "./workoutHistoryModal.js"
import { TouchableOpacityComponent } from 'react-native';

export default function WorkoutPage() {

    const mainStyle = {
        backgroundColor: "rgb(15,15,15)", 
        height: "100%", 
        zIndex: -1,
        justifyContent: "center",
        alignItems: "center",
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


    const [showWorkoutHistory, setShowWorkoutHistory] = useState(false)
   
    return (
        <View style={mainStyle}>
            <TouchableOpacity style={{position: "absolute", top: 40, right: 10}} onPress={() => {setShowWorkoutHistory(true)}}><Image source={require('./workoutHistoryIcon.png')} /></TouchableOpacity>
            <Modal transparent={true} visible={showWorkoutHistory}><WorkoutHistoryModal></WorkoutHistoryModal></Modal>
        </View>
    )
}

