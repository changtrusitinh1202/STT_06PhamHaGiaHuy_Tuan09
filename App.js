import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { Pressable } from "react-native";


import store from "./redux/store";
import increment from "./redux/action1";
import decrement from "./redux/action2";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
    <Pressable 
      style={styles.Pressable}
      onPress={() => {
        store.dispatch(increment);
        setCount(store.getState().count);
      }}
    >
      <Text style={{fontSize: '35px', fontWeight: '600', marginBottom: '10px'}}>+</Text>
      </Pressable>

    <Text style={{marginTop: '30px', fontSize: '20px'}}>Number: {count}</Text>

    <Pressable 
      style={styles.Pressable}
      onPress={() => {
        store.dispatch(decrement);
        setCount(store.getState().count);
      }}
    >
      <Text style={{fontSize: '35px', fontWeight: '600', marginBottom: '10px'}}>-</Text>
    </Pressable>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
  },

  Pressable:{
      width: '100px',
      height: '100px',
      backgroundColor: 'pink',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%'
  }
})
