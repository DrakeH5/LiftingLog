import { Text, View } from 'react-native';

export default function TotalCalsForCurrentDay({data}) {

    const Mainstyle = {
        position: "relative",
        top: "-15%",
    }
    const Calstyle = {
        color: "gold",
        fontSize: "35%",

    }
    const Protienstyle = {
        color: "red",
        fontSize: "25%",
        position: "relative",
        top: "-15%",
        textAlign: "center"
    }

    var totalCals = 0;
    for(var i=0; i<data.length; i++){
        totalCals+=data[i][1]*1
    }
    var totalProtien = 0;
    for(var i=0; i<data.length; i++){
        totalProtien+=data[i][3]*1
    }
    return(
        <View style={Mainstyle}>
            <Text style={Calstyle}>Calories: {totalCals} {"\n"}</Text> 
            <Text style={Protienstyle}>Protein: {totalProtien}</Text>
        </View>
    )
}

