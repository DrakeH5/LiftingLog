import { Text } from 'react-native';

export default function TotalCalsForCurrentDay({data}) {

    const style = {
        color: "gold",
        fontSize: "35%",
        position: "relative",
        top: "-15%"
    }

    var totalCals = 0;
    for(var i=0; i<data.length; i++){
        totalCals+=data[i][1]*1
    }
    return(
        <Text style={style}>Calories: {totalCals}</Text>
    )
}

