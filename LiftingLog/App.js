import { useState } from 'react';
import { Text } from 'react-native';
import SignedInPage from './signedInPage.js';
import SignedOutPage from './SignedOutPage.js';

export default function Homepage(){

  const [signedIn, setSignedIn] = useState(true)

  if(signedIn){
    return <SignedInPage/>
  } else {
    return <SignedOutPage/>
  }
}

