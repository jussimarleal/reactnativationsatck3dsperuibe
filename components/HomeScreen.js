import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Touchable } from 'react-native';

export default function HomeScreen({navigation}) {
 return (
    <View style={styles.bloco}>
        <Text>Olá mundo Teste</Text>

        <TouchableOpacity
            onPress={()=>navigation.navigate("SaoPaulo")}
        >
            <Text>
                São Paulo
            </Text>
        </TouchableOpacity>
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
