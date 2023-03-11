import { Text, View, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function IndividualFoodDietHistorySection({data, partOfDietHistoryVisability}) {

    const generalTextStyle = {
        color: "white",
        fontSize: "30%",
    }

    return (
        data.map(data => {
            return (
                partOfDietHistoryVisability? <Text style={generalTextStyle}>{data}</Text> : null
            )
        })
    )
}

