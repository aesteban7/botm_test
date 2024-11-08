import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
}); */

import HomeStack from './navigation/homeStack';
import Home from './screens/home';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    // stack navigator to move between nested stacks
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ headerShown: false }}
          />
                  
      </Stack.Navigator>
    </NavigationContainer>
  );
}