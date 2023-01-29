import { Text, View, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function Homepage() {

    const mainStyle = {
        backgroundColor: "rgb(50,50,50)", 
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

    var dietHistoryData = ["Apple / 200"]

    var dietHistoryComponentsFromServerData = []

    for(var i=0; i<dietHistoryData.length; i++){
        dietHistoryComponentsFromServerData.push(
            <View id={i} style={{borderColor: "grey", borderWidth: 2, margin: "3%"}}>
                <Text style={generalTextStyle}>{dietHistoryData[i]}</Text>
            </View>
        )
    }

    var [dietHistoryComponents, setDietHistoryComponents] = useState(dietHistoryComponentsFromServerData)
    

    function addToHistory(name, cals){
        setDietHistoryComponents((prevComponents) => [
            ...prevComponents,
            <View style={{borderColor: "grey", borderWidth: 2, margin: "3%"}}>
                <Text style={generalTextStyle}>{name} / {cals}</Text>
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

