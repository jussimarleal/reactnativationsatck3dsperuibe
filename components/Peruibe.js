import React,{useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Touchable } from 'react-native';

export default function Peruibe({navigation}) {
useEffect(
    ()=>{
        function teste(){
            console.warn("Teste da useEffect");
        }
        teste();
    },[]
);
 return (
    <View style={styles.bloco}>
        <Text>Peruibe</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
    bloco:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});
