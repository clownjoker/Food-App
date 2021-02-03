import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './component/Home';
import Details from './component/Details';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="details" component={Details} options={{headerShown:false}}/>

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}