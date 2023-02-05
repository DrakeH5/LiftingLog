import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {API_KEY, EXPO_CLIENT_ID, WEB_CLIENT_ID, IOS_CLIENT_ID} from "@env"; 

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();


export default function SignedOutPage() {


    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: EXPO_CLIENT_ID,
        iosClientId: IOS_CLIENT_ID,
        //androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        webClientId: WEB_CLIENT_ID,
      });
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
        }
      }, [response]);

  return (
    <View style={{position: "absolute", top: "50%"}}>
        <Text>Please Sign In</Text> 
        <Text>{API_KEY}</Text>
        <Button
        disabled={!request}
        title="Login"
        onPress={() => {
            promptAsync();
        }}
        />
    </View>
  )
}
