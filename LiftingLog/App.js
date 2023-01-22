import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native'; 
import {Button} from 'react-native'; 

export default function App() {
  const mainLogoStyle = {
    width: "100%",
    height: "75%",
    resizeMode: 'stretch',
    top: "-10%"
  }
  const viewStyle = {
    backgroundColor: "rgb(10,10,10)",
    height: "100%"
  }
  return (
    <View style={viewStyle}>
      <Text>Lifting Log!</Text>
      <Image style={mainLogoStyle} source={require('./mainLogo.png')} />
      <StatusBar style="auto" /> 
      <View>
        <Button title="WORKOUT" color="white" />
        <Button title="CALORIES" color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
