import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Image} from 'react-native'; 
import {Button} from 'react-native'; 
import DietPage from "./dietPage.js"
import SignedInPage from './signedInPage.js';
import WorkoutPage from './workoutPage.js';

export default function SignedOutPage() {
  return (
    <Text>Please Sign In</Text>
  )
}
