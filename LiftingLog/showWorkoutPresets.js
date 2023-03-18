import { Text, Button, View } from 'react-native';
import { useState } from 'react';


export default function ShowWorkoutPresets({userName}) {

    const presetsTextStyle = {
        color: "lightblue",
        fontSize: "25%",
        position: "absolute",
        top: "20%",
        textAlign: "center",
        width: "100%"
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
            var presetNames = ["Presets \n"];
            for(var i=0; i<data.length; i++){
                presetNames.push(<PresetComponent data={data[i]}/>)
                presetNames.push(<Text>{"\n"}</Text>)
            }
            setPresetWorkouts(presetNames); 
        });
      }

    var [presetWorkouts, setPresetWorkouts] = useState(getWorkoutPresetsFromServer)


    return (
        <Text style={presetsTextStyle}>{presetWorkouts}</Text>
    )
}




function PresetComponent({data}) {

    const mainStyle = { 
        //position: "relative",
        textAlign: "center",
        justifyContent:"center",
        width: "100%"
    }
    const textStyle = {
        color: "gold",
        fontSize: "30%",
   
    }

    var [isVisible, setIsVisible] = useState("0%")
    var [buttonIcon, setButtonIcon] = useState("<")

    function btnClick(){
        if(buttonIcon=="<"){
            setIsVisible("100%");
            setButtonIcon("^")
        } else {
            setIsVisible("0%");
            setButtonIcon("<")
        }
    }

    var [presetWorkouts, setPresetWorkouts] = useState([])
    for(var i=1; i<data.length && presetWorkouts.length+2<data.length; i++){
        if(data[i]!=""){
            presetWorkouts.push(data[i] + "\n")
        } else {
            presetWorkouts.push("")
        }
    } 


    return(
        <View style={mainStyle}>
            <Text style={textStyle}>
                <Button onPress={btnClick} title={buttonIcon}></Button>
                {data[0]}
            </Text>
            <Text style={{width: isVisible}}>
                <Text style={{color: "white", fontSize: "20%"}}>
                    {presetWorkouts}
                </Text> 
            </Text>
        </View>
    )
}