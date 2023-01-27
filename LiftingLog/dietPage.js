import { Text, View } from 'react-native';

export default function Homepage() {

    const mainStyle = {
        backgroundColor: "rgb(50,50,50)", 
        height: "100%", 
        zIndex: -1,
        justifyContent: "center",
        alignItems: "center",
    }

    const generalTextStyle = {
        color: "white",
        fontSize: "30%",
    }

    var dietHistoryData = ["cookie", "Apple", "steak"]

    var dietHistoryComponents = []

    for(var i=0; i<dietHistoryData.length; i++){
        dietHistoryComponents.push(
            <View style={{borderColor: "grey", borderWidth: 2, margin: "3%"}}>
                <Text style={generalTextStyle}>{dietHistoryData[i]}</Text>
            </View>
        )
    }

    return (
        <View style={mainStyle}>
            {dietHistoryComponents}
        </View>
    )
}

