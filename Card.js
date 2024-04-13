import * as React from 'react';
import { Text, View } from 'react-native';
import styles from "./Styles"


export default function Card ({nome, tipo, end, notas, comment, index}) {

  

  return (
    
    <View style={ index > 0 ? styles.container : {display:'none'} }>
    <Text>  </Text>
    <Text> {nome} </Text>
    <View style={styles.line}></View>
    <Text> Tipo: {tipo} </Text>
    <Text> Endereço: {end} </Text>
    <Text> Comentários: {notas} </Text>
    
    </View>
  );
}
