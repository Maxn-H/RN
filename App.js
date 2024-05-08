import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameScreen from './screens/GameScreen';
import EasyGameScreen from './screens/EasyGameScreen';

export default function App() {

  let screen = <WelcomeScreen/>;
  const Stack = createNativeStackNavigator();
  
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{title: 'Welcome Screen'}}
        />
        <Stack.Screen name="EasyGame" component={EasyGameScreen} />
        <Stack.Screen name="HardGame" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
