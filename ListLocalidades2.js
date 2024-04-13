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
import FlatListLocalidades2 from "./flatListLocalidades2"

import {useNavigation} from '@react-navigation/native'


export default function ListLocalidades2 ({data}) {



console.log("localidades2")
const navi = useNavigation()


return(

<View>
<FlatList
data={data.local}
renderItem={({item})=> <FlatListLocalidades2 data={item} /> }
/>

</View>

)} 










