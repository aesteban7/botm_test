import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../GlobalStyles';
//import { auth } from '../firebase';
//import { updateProfile } from "firebase/auth";
import moment from 'moment/moment';
//import { doc, getDoc } from 'firebase/firestore';
//import { db } from '../firebase'; 
import { useFocusEffect } from '@react-navigation/native';

// Creates home/welcome screen
export default function Home({navigation,route}) {
  const [checkInSubmitted, setCheckInSubmitted] = useState(false);
  const [checkOutSubmitted, setCheckOutSubmitted] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const today = moment().format("YYYY-MM-DD");
      //const currentUser = auth.currentUser;
      //const driverName = currentUser.displayName;
      const driverName = "Driver1"

      //const checkInDocRef = doc(db, "Data", today, "Check in", driverName);
      //const checkOutDocRef = doc(db, "Data", today, "Check Out", driverName);

  
      /* const checkStatus = async () => {
        const checkInDocSnap = await getDoc(checkInDocRef);
        const checkOutDocSnap = await getDoc(checkOutDocRef);

    
        if (checkInDocSnap.exists() && !checkOutDocSnap.exists()) {

          setCheckInSubmitted(true); 
          setCheckOutSubmitted(false); 
        } else if (!checkInDocSnap.exists()) {
          setCheckInSubmitted(false); 

          setCheckOutSubmitted(true); 
        } else {
          setCheckInSubmitted(true);
          setCheckOutSubmitted(true);
        }
      }; */
      //checkStatus();
    }, [])
  );
  //const name = auth.currentUser && auth.currentUser.displayName ? auth.currentUser.displayName : "to BMFB";
  const name = "Driver1"
  return (
    <View style={globalStyles.container}>
      <View style={{ alignSelf: 'center', borderBottomColor: 'orange', borderBottomWidth: 2 }}>
        <Text style={{ fontSize: 36, lineHeight: 45, color: '#006400' }}>
          {'Welcome ' + name}
        </Text>
      </View>
      
      <Text style={globalStyles.titleText}> </Text>
      <TouchableOpacity
        //onPress={() => navigation.navigate('Check In')}
        //disabled={checkInSubmitted}
        activeOpacity={0.6}>

      </TouchableOpacity>

      <Text style={globalStyles.titleText}> </Text>

      <TouchableOpacity
        onPress={() => {
          //if (checkInSubmitted && !checkOutSubmitted) {
          //  navigation.navigate('Check Out');
         // }
        }}
        //disabled={!checkInSubmitted || checkOutSubmitted}
        activeOpacity={0.6}>
        <Text style={[globalStyles.button, { backgroundColor: !checkInSubmitted || checkOutSubmitted ? 'gray' : '#446128' }]}>
  {!checkInSubmitted ? "Please Check In First" : checkOutSubmitted ? "Checked Out" : "Check Out"}
</Text>
      </TouchableOpacity>
    </View>
  );
}