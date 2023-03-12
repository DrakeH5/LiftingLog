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
        top: "-25%",
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
      const eachMealStyle = {
        position: "absolute",
        width: "100%",
        top: "45%"
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

    var eachMeal = [];
    for(var i=0; i<data.length; i++){
      eachMeal.push(
        <View>
          <Text style={{backgroundColor: "lightblue", width: "100%", textAlign: "center"}}>Food {i+1}</Text>
          <Text style={{color: "white", width: "100%", textAlign: "center"}}>
            <Text>{data[i][0]} </Text>
            <Text> {data[i][1]} calories</Text>
          </Text>
          <Text style={{color: "white", width: "100%", textAlign: "center"}}>
            <Text style={{color: "red"}}>{data[i][3]} Protein</Text>
            <Text style={{color: "lightgreen"}}> {data[i][2]} Carbs</Text> 
            <Text style={{color: "gold"}}> {data[i][4]} Fat</Text> 
            {"\n"}
          </Text>
        </View>
      )
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
            <Text style={{color: "gold"}}>Total Fat: {totalFat}</Text> 
          </Text>
          <View style={eachMealStyle}>
            {eachMeal}
          </View>
        </View>
      )
 
}

