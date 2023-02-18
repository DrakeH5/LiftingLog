import { Text, View, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function DietPage({userName}) {

    const mainStyle = {
        backgroundColor: "rgb(30,30,30)", 
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



    
  function getDietHistoryFromServer(){
    fetch('http:192.168.2.115:5000/getDietHistory', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
      }),
    }).then(res => res.json()).then(data => {
        dietHistoryData = data; 
        turnDietHistoryDataIntoComponents()
    });
  }

    var dietHistoryData = []

    var dietHistoryComponentsFromServerData = []

    var [dietHistoryComponents, setDietHistoryComponents] = useState([])

    function turnDietHistoryDataIntoComponents(){
        for(var i=0; i<dietHistoryData.length; i++){
            dietHistoryComponentsFromServerData.push(
                <View id={i} style={{borderColor: "grey", borderWidth: 2, margin: "3%"}}>
                    <Text style={generalTextStyle}>{dietHistoryData[i][0]} {dietHistoryData[i][1]} {dietHistoryData[i][2]}</Text>
                </View>
            )
        }
        setDietHistoryComponents(dietHistoryComponentsFromServerData)
    }
    
    
    getDietHistoryFromServer()

    
    function addToHistory(name, cals){
        var date = new Date()
        setDietHistoryComponents((prevComponents) => [
            ...prevComponents,
            <View style={{borderColor: "grey", borderWidth: 2, margin: "3%"}}>
                <Text style={generalTextStyle}>{name} {cals} {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</Text>
            </View>
        ]);
    }


    const [foodNameInput, setFoodNameInput] = useState()
    const [foodCalsInput, setFoodCalsInput] = useState()
    function addFood(){
        addToHistory(foodNameInput, foodCalsInput)
        setPopUpVis(false)
    }

    const [popUpVis, setPopUpVis] = useState(false)


    return (
        <View style={mainStyle}>
            {dietHistoryComponents}
            <Text style={{fontSize: "100%", color: "red", position: "absolute",  bottom: "1%", right: "5%"}} onPress={() => setPopUpVis(true)} >+</Text>
            <Modal transparent={true} visible={popUpVis}>
                <View style={popupStyle}>
                    <TextInput onChangeText={text => setFoodNameInput(text)} placeholder="Food Name" style={{padding: 20}} id="foodName"></TextInput>
                    <TextInput onChangeText={text => setFoodCalsInput(text)} placeholder="Est. Cals"></TextInput>
                    <Button title="ADD" onPress={addFood}></Button>
                    <Button title="X" onPress={() => {setPopUpVis(false)}}></Button>
                </View>
            </Modal>
        </View>
    )
}

