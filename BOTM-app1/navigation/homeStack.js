import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image} from 'react-native';
//import CheckIn from '../screens/check_in';
//import StopsLog from '../screens/pickup_log';
//import CardOrders from '../screens/cardorders';
//import CheckOut from '../screens/check_out';
import Home from '../screens/home';
import { EvilIcons } from '@expo/vector-icons';
import { globalStyles } from '../GlobalStyles';
//import { auth } from '../firebase';
//import ResetPassword from '../screens/resetPassword';
//import ManageAcct from '../screens/manageAcct';
//import ChangeName from '../screens/changeName';
//import SevenDayBackLog from '../screens/Seven_Day_BackLog';
//import EditPickup from '../screens/edit_pickup';
//import DropOffLog from '../screens/dropoff_log';

function Logo() {
    return (
      <Image
        style={{ width: 250, height: 40 }}
        source={require("../assets/splash2.png")}
        resizeMode="contain"
      />
    );
  }
// home screen stack 
// all screens for when user is authenticated

const Stack = createNativeStackNavigator();

export const EditButton = ({ onPress }) => (
  <View style={{ marginRight: 10 }}>
    <TouchableOpacity onPress={onPress}>
      <Text style={globalStyles.icon}>Edit</Text>
    </TouchableOpacity>
  </View>
);

export default function HomeStack({navigation}) {
    return (
        <Stack.Navigator
        initialRouteName='Home1'
        screenOptions={{headerStyle:{backgroundColor:'#446128',},headerTintColor:"white" }}>
        <Stack.Screen
            name="Home1" 
            component={Home}
            options={{ 
                //headerTitle: (props) => <Logo {...props} />,
                // gear button to sign user out

            }
          }/>

        </Stack.Navigator>
    );
}
