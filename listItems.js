import React, { Component, useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity, 
  Animated
} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable'

import {useNavigation} from '@react-navigation/native'
import styles from "./Styles"
import AsyncStorage, { useAsyncStorage} from '@react-native-community/async-storage';

import ListLocalidades from "./ListLocalidades"
import AddLocal from "./AddLocal"
import ActionDel from "./actionDel"


export default function ListItems ({data, onPress}) {

    const navi = useNavigation()
    
    const goToLocal = async(x)=> {
        await AsyncStorage.setItem('showLocal', x)
        navi.navigate("Localidades")
    }


  return (

    <View style={styles.listContainer}>
    <Swipeable
    renderRightActions ={()=> <ActionDel onPress={onPress}/> }
    >
   <TouchableOpacity onPress={()=> {goToLocal(data.id)}} >
    <View style={{flexDirection:'row'}}>
    <Text> {data.cidade} - {data.pais} </Text>
    <Text style={{position: 'absolute', left: '90%', color:'gray', fontWeight:'bold'}} > > </Text>
    </View>
    </TouchableOpacity>
    </Swipeable>
    </View>


  )
}