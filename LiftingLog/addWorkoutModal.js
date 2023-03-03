import { Text, View, TouchableOpacity, Image, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function AddWorkoutModal({userName}) {

    const modalViewStyle = {
        position: "relative", 
        top: "20%", 
        backgroundColor: "grey",
        justifyContent: "center", 
        alignItems: "center", 
        margin: "10%"
    }
    const presetsModalViewStyle = {
        position: "relative", 
        top: "-40%", 
        justifyContent: "right", 
        alignItems: "right", 
        margin: "10%"
    }
    const workoutTextStyle = {
        color: "white",
        fontSize: "20%",
    }
    const textInputStyle = {
        padding: 20
    }


    function getWorkoutPresetsFromServer(){
        fetch('http:192.168.2.115:5000/getWorkoutPreset', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: userName,
          }),
        }).then(res => res.json()).then(data => {
            workoutPresetsData = data; 
            turnWorkoutPresetDataIntoComponents()
        });
      }

      var workoutPresetsData = []
    
      var workoutPresetComponentsFromServerData = []
  
      var [workoutPresetComponents, setWorkoutPresetComponents] = useState([])
  
      function turnWorkoutPresetDataIntoComponents(){
          workoutPresetsData.forEach(data => {
            workoutPresetComponentsFromServerData.push(
                <Button title={data[0]} onPress={() => {autoFillPresets(data[1], data[2], data[3], data[4], data[5], data[6], data[7])}} />
            )
          })
          setWorkoutPresetComponents(workoutPresetComponentsFromServerData)
      }

      getWorkoutPresetsFromServer()


      function autoFillPresets(w1, w2, w3, w4, w5, w6){
        setWorkout1Placeholder(w1)
        setWorkout1(w1)
        setWorkout2Placeholder(w2)
        setWorkout2(w2)
        setWorkout3Placeholder(w3)
        setWorkout3(w3)
        setWorkout4Placeholder(w4)
        setWorkout4(w4)
        setWorkout5Placeholder(w5)
        setWorkout5(w5)
        setWorkout6Placeholder(w5)
        setWorkout6(w6)
      }


    function addWorkout(){
        var date = new Date()
        var workouts = [workout1,workout2,workout3,workout4,workout5,workout6,date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear()]
        fetch('http:192.168.2.115:5000/addToWorkoutHistory', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: userName,
            workouts: workouts
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

    const [workout1Placeholder, setWorkout1Placeholder] = useState("Workout 1")
    const [workout2Placeholder, setWorkout2Placeholder] = useState("Workout 2")
    const [workout3Placeholder, setWorkout3Placeholder] = useState("Workout 3")
    const [workout4Placeholder, setWorkout4Placeholder] = useState("Workout 4")
    const [workout5Placeholder, setWorkout5Placeholder] = useState("Workout 5")
    const [workout6Placeholder, setWorkout6Placeholder] = useState("Workout 6")

    return (
        <View style={{position: "relative", top: "100%"}}>
            <Text style={{fontSize: "100%", color: "red", position: "absolute",  bottom: "1%", right: "5%"}} onPress={() => setShowAddWorkoutModule(true)} >+</Text>
            <Modal transparent={true} visible={showAddWorkoutModule}>
                <View style={modalViewStyle}>
                    <Text>ADD WORKOUT</Text>
                    <TextInput onChangeText={text => setWorkout1(text)} placeholder={workout1Placeholder} style={textInputStyle} id="workout1"></TextInput>
                    <TextInput onChangeText={text => setWorkout2(text)} placeholder={workout2Placeholder} style={textInputStyle} id="workout2"></TextInput>
                    <TextInput onChangeText={text => setWorkout3(text)} placeholder={workout3Placeholder} style={textInputStyle} id="workout3"></TextInput>
                    <TextInput onChangeText={text => setWorkout4(text)} placeholder={workout4Placeholder} style={textInputStyle} id="workout4"></TextInput>
                    <TextInput onChangeText={text => setWorkout5(text)} placeholder={workout5Placeholder} style={textInputStyle} id="workout5"></TextInput>
                    <TextInput onChangeText={text => setWorkout6(text)} placeholder={workout6Placeholder} style={textInputStyle} id="workout6"></TextInput>
                    <Button title="Add Workout" onPress={addWorkout} />  
                    <Button title="X" onPress={() => {setShowAddWorkoutModule(false)}} />
                </View>
                <View style={presetsModalViewStyle}>
                    <Text>Presets</Text>
                    {workoutPresetComponents}
                </View>
            </Modal>
        </View>
    )
}

