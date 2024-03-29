import { Text, View, Modal, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import DietPageHistorySection from "./dietPageHistorySection.js"
import DietCalendar from "./dietCalendar.js"
import DateSpecificData from "./dateSpecificData.js"
import TotalCalsForCurrentDay from "./totalCalsForCurrentDay.js"

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
        top: "30%", 
        backgroundColor: "lightblue", 
        justifyContent: "center", 
        alignItems: "center", 
        margin: "10%"
    }



    
  function getDietHistoryFromServer(date){
    fetch('http:192.168.2.115:5000/getDietHistory', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        date: date
      }),
    }).then(res => res.json()).then(data => {
        setHistoryForDate(data)
    });
  }

  var [historyForDate, setHistoryForDate] = useState([])



    function addToHistory(name, cals, carbs, protein, fat){
        var date = new Date()
        fetch('http:192.168.2.115:5000/addToDietHistory', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userName: userName,
              foodData: [name, cals, carbs, protein, fat, date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear()]
            }),
          })
    }


    const [foodNameInput, setFoodNameInput] = useState()
    const [foodCalsInput, setFoodCalsInput] = useState()
    const [foodCarbsInput, setFoodCarbsInput] = useState()
    const [foodProteinInput, setFoodProteinInput] = useState()
    const [foodFatInput, setFoodFatInput] = useState()

    function addFood(){
        addToHistory(foodNameInput, foodCalsInput, foodCarbsInput, foodProteinInput, foodFatInput)
        setPopUpVis(false)
    }

    const [popUpVis, setPopUpVis] = useState(false)

    var [mode, setMode] = useState("calender")
    function changeMode(date){
      setMode(date)
      getDietHistoryFromServer(date)
    }

    useEffect(() => {
      var date = new Date()
      getDietHistoryFromServer(date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear())
    }, [])

    if(mode=="calender"){
      return (
          <View style={mainStyle}>
              <TotalCalsForCurrentDay data={historyForDate}/>
              <DietCalendar lookAtDay={changeMode} />
              <Text style={{fontSize: "100%", color: "red", position: "absolute",  bottom: "1%", right: "5%"}} onPress={() => setPopUpVis(true)} >+</Text>
              <Modal transparent={true} visible={popUpVis}>
                  <View style={popupStyle}>
                      <TextInput onChangeText={text => setFoodNameInput(text)} placeholder="Food Name" style={{padding: 20}} id="foodName"></TextInput>
                      <TextInput onChangeText={text => setFoodCalsInput(text)} placeholder="Est. Cals"></TextInput>
                      <TextInput onChangeText={text => setFoodCarbsInput(text)} placeholder="Est. Carbs"></TextInput>
                      <TextInput onChangeText={text => setFoodProteinInput(text)} placeholder="Est. Protein"></TextInput>
                      <TextInput onChangeText={text => setFoodFatInput(text)} placeholder="Est. Fats"></TextInput>
                      <Button title="ADD" onPress={addFood}></Button>
                      <Button title="X" onPress={() => {setPopUpVis(false)}}></Button>
                  </View>
              </Modal>
          </View>
      )
    } else {
      return (
          <DateSpecificData date={mode} data={historyForDate}/>
      )
    }
}

