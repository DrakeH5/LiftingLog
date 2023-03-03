import { Text, View, TouchableOpacity, Image, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function PresetsModal({userName}) {

    const modalViewStyle = {
        position: "relative", 
        top: "20%", 
        backgroundColor: "grey", 
        justifyContent: "center", 
        alignItems: "center", 
        margin: "10%"
    }
    const textInputStyle = {
        padding: 20
    }



    function addWorkoutPreset(){
        var date = new Date()
        var presets = [workout1,workout2,workout3,workout4,workout5,workout6,date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear()]
        fetch('http:192.168.2.115:5000/addWorkoutPreset', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: userName,
            presets: presets
          }),
        }).then(res => res.json()).then(data => {
            alert(data)
        });
      }



    const [showAddWorkoutModule, setShowAddWorkoutModule] = useState(false)

    const [workout1, setWorkout1] = useState("")
    const [workout2, setWorkout2] = useState("")
    const [workout3, setWorkout3] = useState("")
    const [workout4, setWorkout4] = useState("")
    const [workout5, setWorkout5] = useState("")
    const [workout6, setWorkout6] = useState("")

    return (
        <View style={{position: "relative", top: "100%"}}>
            <Text style={{fontSize: "90%", color: "dodgerblue", position: "absolute",  bottom: "1%", left: "5%"}} onPress={() => setShowAddWorkoutModule(true)} >P</Text>
            <Modal transparent={true} visible={showAddWorkoutModule}>
                <View style={modalViewStyle}>
                    <Text>ADD WORKOUT PRESET</Text>
                    <TextInput onChangeText={text => setWorkout1(text)} placeholder="Workout 1" style={textInputStyle} id="workout1"></TextInput>
                    <TextInput onChangeText={text => setWorkout2(text)} placeholder="Workout 2" style={textInputStyle} id="workout2"></TextInput>
                    <TextInput onChangeText={text => setWorkout3(text)} placeholder="Workout 3" style={textInputStyle} id="workout3"></TextInput>
                    <TextInput onChangeText={text => setWorkout4(text)} placeholder="Workout 4" style={textInputStyle} id="workout4"></TextInput>
                    <TextInput onChangeText={text => setWorkout5(text)} placeholder="Workout 5" style={textInputStyle} id="workout5"></TextInput>
                    <TextInput onChangeText={text => setWorkout6(text)} placeholder="Workout 6" style={textInputStyle} id="workout6"></TextInput>
                    <Button title="Add Workout Preset" onPress={addWorkoutPreset} />  
                    <Button title="X" onPress={() => {setShowAddWorkoutModule(false)}} />
                </View>
            </Modal>
        </View>
    )
}

