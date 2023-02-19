import { Text, View, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function DietPageHistorySection({data}) {
    

    const generalTextStyle = {
        color: "white",
        fontSize: "30%",
    }


    var [partOfDietHistoryVisability, setPartOfDietHistoryVisability] = useState(false)

    return (
        <View style={{borderColor: "grey", borderWidth: 2, margin: "3%"}}>
            <Button title={data[0]} onPress={()=>{setPartOfDietHistoryVisability(!partOfDietHistoryVisability)}}></Button>
            {partOfDietHistoryVisability? <Text style={generalTextStyle}>{data[0]} {data[1]} {data[2]}</Text> : null }
        </View>
    )
}

