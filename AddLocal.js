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
import {useNavigation} from '@react-navigation/native'
import styles from "./Styles"
import AsyncStorage, { useAsyncStorage} from '@react-native-community/async-storage';


export default function AddLocal ({data, navigation}) {

  useEffect(() => {
    
    
      check()
  

  }, [navigation]);

const [lista, setLista] = useState()

const [name, setName] = useState()
const [nameVal, setNameVal] = useState()

const [tipo, setTipo] = useState()
const [tipoVal, setTipoVal] = useState()

const [end, setEnd] = useState()
const [endVal, setEndVal] = useState()

const [notas, setNotas] = useState()
const [notasVal, setNotasVal] = useState()

const [comment, setComment] = useState()
const [commentVal, setCommentVal] = useState()



const check = async ()=> {

  
  const lastListJSON = await AsyncStorage.getItem('lastList')
  const lastList = JSON.parse(lastListJSON)
 

  setLista(lista => [...lista = lastList])
  setLista([...lista])

  console.log('check')
  console.log(lista)




const novaLista = lista.findIndex(obj => obj.id == data.id )

//lista[novaLista].local.nome = nameVal
//lista[novaLista].local.tipo = tipoVal
//lista[novaLista].local.end = endVal
//lista[novaLista].local.notas = notasVal
lista[novaLista].local.push({ nome: nameVal, tipo: tipoVal, end: endVal, notas: notasVal, comment: commentVal })
console.log(lista)

setNameVal('')
setTipoVal('')
setEndVal('')
setNotasVal('')
setCommentVal('')


await AsyncStorage.setItem('lastList', JSON.stringify(lista))


}

    const navi = useNavigation()

  return (

    <View style={styles.addLocalContainer}>
   
   <Text> Add New Location In {data.cidade} </Text>

   <TextInput  style={styles.txtInAddLocal} placeholder='Nome' value={nameVal} onChangeText={(txt)=> setNameVal(txt) }    />
   <TextInput style={styles.txtInAddLocall} placeholder='Tipo' value={tipoVal} onChangeText={(txt)=> setTipoVal(txt) }    />
   <TextInput style={styles.txtInAddLocall} placeholder='Endereço' value={endVal} onChangeText={(txt)=> setEndVal(txt) }  />
   <TextInput style={styles.txtInAddLocalll} placeholder='Notas' value={notasVal} onChangeText={(txt)=> setNotasVal(txt) }/>

   <TouchableOpacity onPress={()=> {check()}} style={styles.addLocationBtn}> 
   Add Location 
   </TouchableOpacity>
    <TouchableOpacity onPress={()=> {console.log(lista)}} style={styles.addLocationBtn}> 
  teste
   </TouchableOpacity>

    <TouchableOpacity onPress={()=> navi.navigate("Localidades")} style={styles.addLocationBtnClose}>
    Close
   </TouchableOpacity>

    </View>


  )
}