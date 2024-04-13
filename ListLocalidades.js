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
import FlatListLocalidades from "./flatListLocalidades"
import Card from "./Card"

import {useNavigation} from '@react-navigation/native'


export default function ListLocalidades ({data}) {



console.log("localidades")
const navi = useNavigation()


return(

<View>
<FlatList
data={data.local}
renderItem = {({item, index}) => <FlatListLocalidades index={index} data={item} /> }
/>



</View>

)} 










