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


export default function Localidades2 ({data}) {



console.log("localidades2")
const navi = useNavigation()


return(

<TouchableOpacity>

<Text> {data.end} ---------flatListLocalidadesDOIS </Text>

</TouchableOpacity>

)

} 



