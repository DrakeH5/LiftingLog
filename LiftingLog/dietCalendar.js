import { Text, View, Modal, Button, TextInput } from 'react-native';
import { useState } from 'react';
import DietPageHistorySection from "./dietPageHistorySection.js"

export default function DietCalendar({lookAtDay}) {
    
    const dayOfWeekStyle = {
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
    }
    //<Text style={dayOfWeekStyle}><Text style={eachDayOfWeekStyle}>Sun</Text><Text style={eachDayOfWeekStyle}>Mon</Text><Text style={eachDayOfWeekStyle}>Tue</Text><Text style={eachDayOfWeekStyle}>Wed</Text><Text style={eachDayOfWeekStyle}>Thu</Text><Text style={eachDayOfWeekStyle}>Fri</Text><Text style={eachDayOfWeekStyle}>Sat</Text></Text>
    const eachDayOfWeekStyle = {
        position: "relative",
        left: "10%"
    }

    const mainStyle = {
        //backgroundColor: "grey",
    }


    var date = new Date();
    var [month, setMonth] = useState(date.getMonth()+1)
    var [year, setYear] = useState(date.getFullYear())


    var thisMonth = []
    var d = new Date(2023, month, 0);
    for(var i=1; i<=d.getDate(); i++){
        thisMonth.push(<DateBtn i={i} month={month} year={year} lookAtDay={lookAtDay} />)
        if(i%7==0){
            thisMonth.push("\n")
        }
    }


    return (
        <View style={mainStyle}>
            <Button title="<" onPress={() => {setMonth(month-1); if(month<=1){setMonth(12); setYear(year-1)}}}></Button>
            <Text style={{fontSize: "25%", color: "white"}}>{month} / {year}</Text>
            <Button title=">" onPress={() => {setMonth(month+1); if(month>=12){setMonth(1); setYear(year+1)}}}></Button>
            <Text>{thisMonth}</Text>
        </View>
    )
}




function DateBtn({i, month, year, lookAtDay}) {
    return <Button title={i + " "} onPress={() => {lookAtDay(month+"/"+i+"/"+year)}}></Button>
}
