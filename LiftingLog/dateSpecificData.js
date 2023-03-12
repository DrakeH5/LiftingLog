import { Text, View, Modal, Button, TextInput, ConicGradient } from 'react-native';
import { useState } from 'react';
//import PieChart from 'react-native-pie-chart';
//import { PieChart } from 'react-native-svg-charts'

export default function DateSpecificData({date, data}) {

    const mainStyle = {
        backgroundColor: "rgb(30,30,30)",  
        height: "100%", 
        zIndex: -1,
        justifyContent: "center",
        alignItems: "center",
        color: "white", 

    }
    const topInfoStyle = {
        color: "lightblue",
        fontSize: "40%",
        position: "relative",
        top: "-27%",
        textAlign: "center"
    }
      const totalMacroInfoStyle = {
        position: "relative",
        top: "-25%",
        color: "white",
        fontSize: "30%",
        textAlign: "left",
        width: "90%",
      }

    var totalCals = 0;
    for(var i=0; i<data.length; i++){
        totalCals+=data[i][1]*1
    }
    var totalProtein = 0;
    for(var i=0; i<data.length; i++){
        totalProtein+=data[i][3]*1
    }
    var totalCarbs = 0;
    for(var i=0; i<data.length; i++){
      totalCarbs+=data[i][2]*1
    }
    var totalFat = 0;
    for(var i=0; i<data.length; i++){
      totalFat+=data[i][4]*1
    }

    const widthAndHeight = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']


      return (
        <View style={mainStyle}>
          <Text style={topInfoStyle}>
            <Text>{date}</Text>  {"\n"}
            <Text>Total Calories: {totalCals}</Text>   {"\n"}
          </Text>
          <Text style={totalMacroInfoStyle}>
            <Text style={{color: "red"}}>Total Protein: {totalProtein}</Text> {"\n"}
            <Text style={{color: "lightgreen"}}>Total Carbs: {totalCarbs}</Text> {"\n"}
            <Text style={{color: "yellow"}}>Total Fat: {totalFat}</Text> 
          </Text>
          
          <Text>{data}</Text>
        </View>
      )
 
}

