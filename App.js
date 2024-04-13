
import React, {useState} from "react"

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

import AddCity from "./AddCity"
import NaviStack from "./NaviStack"
import {Localidades} from "./Cities"
export default function App () {


return(


<NavigationContainer>

<Tab.Navigator screenOptions={{headerShown: false}} >
<Tab.Screen name='ADD CITY' component={AddCity}/>

<Tab.Screen name='CITIES' component={NaviStack}/>

</Tab.Navigator>


</NavigationContainer>

      


)

}



