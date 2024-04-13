import React from "react"
import {View, Text, FlatList, TextInput, TouchableOpacity} from "react-native"



export default function DelAction ({onPress}) {



  return(
    <View>
    <TouchableOpacity onPress={onPress} >
    <Text> DEL </Text>
    </TouchableOpacity>
    </View>
  )
}