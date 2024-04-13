import React, { Component, useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  Animated, 
  TouchableOpacity
} from 'react-native';
import styles from './Styles';
import AddCity from './AddCity';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import ListItems from "./listItems"

import {useNavigation} from '@react-navigation/native'
import Card from "./Card"

export default function FlatListLocalidades ({data, index}) {




const navi = useNavigation()

const goToFlatListLocalidades2 = ()=> {

  navi.navigate("Localidades2")

let dataEnd = data.end
const newDataEnd = (dataEnd)=>{

if (dataEnd == '') {dataEnd = null}
}

newDataEnd(dataEnd)

} 

return(

<TouchableOpacity onPress={()=> {goToFlatListLocalidades2(data.id)} }>

<Card index={index} nome={data.nome} tipo={data.tipo} end={data.end} notas={data.notas} comment={data.comment}  />

</TouchableOpacity>

)

} 






















