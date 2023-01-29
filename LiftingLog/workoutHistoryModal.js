import { Text, View, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { useState } from 'react';

export default function WorkoutHistoryModal() {

    const modalViewStyle = {
        position: "relative", 
        top: "20%", 
        backgroundColor: "grey", 
        justifyContent: "center", 
        alignItems: "center", 
        margin: "10%"
    }


    const [showWorkoutHistory, setShowWorkoutHistory] = useState(false)

    return (
        <View>
            <TouchableOpacity style={{position: "absolute", top: 30, right: 20}} onPress={() => {setShowWorkoutHistory(true)}}><Image source={require('./workoutHistoryIcon.png')} /></TouchableOpacity>
            <Modal transparent={true} visible={showWorkoutHistory}>
                <View style={modalViewStyle}>
                    <Text>WORKOUT HISTORY</Text>
                    <Button title="X" onPress={() => {setShowWorkoutHistory(false)}} />
                </View>
            </Modal>
        </View>
    )
}

