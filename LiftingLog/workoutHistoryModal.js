import { Text, View } from 'react-native';
import { useState } from 'react';

export default function WorkoutHistoryModal() {

    const mainStyle = {
        position: "relative", 
        top: "20%", 
        backgroundColor: "grey", 
        justifyContent: "center", 
        alignItems: "center", 
        margin: "10%"
    }

    return (
        <View style={mainStyle}>
            <Text>WORKOUT HISTORY</Text>
        </View>
    )
}

