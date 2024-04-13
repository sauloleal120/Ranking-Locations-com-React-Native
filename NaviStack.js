
import React, {Component, useState} from "react"
import {View, Text, Button, StyleSheet, TextInput, FlatList, Animated} from "react-native"
import styles from "./Styles"

import { NavigationContainer } from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import AddCity from "./AddCity"
import Cities from "./Cities"
import {Localidades} from "./Cities"
import {AddLocall} from "./Cities"
import {Localidades2} from "./Cities"

export default function NaviStack () {


return(


<Stack.Navigator>
<Stack.Screen name='CITIES' component={Cities}/>
<Stack.Screen name='Localidades' component={Localidades}/>
<Stack.Screen name='Localidades2' component={Localidades2}/>
<Stack.Screen name="AddLocall" component={AddLocall}/>

</Stack.Navigator>


)}


