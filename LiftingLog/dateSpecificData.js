import { Text, View, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';

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
        fontSize: "30%",
        position: "relative",
        top: "-30%",
    }

    var totalCals = 0;
    for(var i=0; i<data.length; i++){
        totalCals+=data[i][1]*1
    }
    var totalProtein = 0;
    for(var i=0; i<data.length; i++){
        totalProtein+=data[i][3]*1
    }

      return (
        <View style={mainStyle}>
          <Text style={topInfoStyle}>
            <Text>{date}</Text>  {"\n"}
            <Text>Total Calories: {totalCals}</Text>   {"\n"}
            <Text>Total Protein: {totalProtein}</Text>
          </Text>
          <Text>{data}</Text>
        </View>
      )
 
}

