import { Text, View, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';
import IndividualFoodDietHistorySection from "./individualFoodDietHistorySection.js"

export default function DietPageHistorySection({data}) {

    var [partOfDietHistoryVisability, setPartOfDietHistoryVisability] = useState(false)

    return (
        <View style={{borderColor: "grey", borderWidth: 2, margin: "3%"}}>
        <Button title={data[0][2]} onPress={()=>{setPartOfDietHistoryVisability(!partOfDietHistoryVisability)}}></Button>
            <IndividualFoodDietHistorySection data={data} partOfDietHistoryVisability={partOfDietHistoryVisability} />
        </View>
    )
}

