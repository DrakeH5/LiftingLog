import { Text, View, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { useState } from 'react';

export default function WorkoutHistoryModal({userName}) {

    const modalViewStyle = {
        position: "relative", 
        top: "20%", 
        backgroundColor: "grey", 
        justifyContent: "center", 
        alignItems: "center", 
        margin: "10%"
    }
    const workoutTextStyle = {
        color: "white",
        fontSize: "20%",
    }



    function getWorkoutHistoryFromServer(){
        fetch('http:192.168.2.115:5000/getWorkoutHistory', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: userName,
          }),
        }).then(res => res.json()).then(data => {
            workoutHistoryData = data; 
            turnWorkoutHistoryDataIntoComponents()
        });
      }
    
        var workoutHistoryData = []
    
        var workoutHistoryComponentsFromServerData = []
    
        var [workoutHistoryComponents, setWorkoutHistoryComponents] = useState([])
    
        function turnWorkoutHistoryDataIntoComponents(){
            for(var i=0; i<workoutHistoryData.length; i++){
                var allWorkoutsForNDay = [];
                for(var j=0; allWorkoutsForNDay.length<workoutHistoryData[i].length; j++){
                    allWorkoutsForNDay.push(workoutHistoryData[i][j]+" ")
                }
                workoutHistoryComponentsFromServerData.push(
                    <View id={i} style={{borderColor: "grey", borderWidth: 2, margin: "3%"}}>
                        <Text style={workoutTextStyle}>{allWorkoutsForNDay}</Text>
                    </View>
                )
            }
            setWorkoutHistoryComponents(workoutHistoryComponentsFromServerData)
            //alert(workoutHistoryComponentsFromServerData)
        }
        
        
        getWorkoutHistoryFromServer()



    const [showWorkoutHistory, setShowWorkoutHistory] = useState(false)

    return (
        <View>
            <TouchableOpacity style={{position: "absolute", top: 30, right: 20}} onPress={() => {setShowWorkoutHistory(true)}}><Image source={require('./workoutHistoryIcon.png')} /></TouchableOpacity>
            <Modal transparent={true} visible={showWorkoutHistory}>
                <View style={modalViewStyle}>
                    <Text>WORKOUT HISTORY</Text>
                    {workoutHistoryComponents}
                    <Button title="X" onPress={() => {setShowWorkoutHistory(false)}} />
                </View>
            </Modal>
        </View>
    )
}

