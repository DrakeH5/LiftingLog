import { Text, View, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';
import WorkoutHistoryModal from "./workoutHistoryModal.js"

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


    const [showWorkoutHistory, setShowWorkoutHistory] = useState(true)
   
    return (
        <View style={mainStyle}>
            <Modal transparent={true} visible={showWorkoutHistory}><WorkoutHistoryModal></WorkoutHistoryModal></Modal>
        </View>
    )
}

