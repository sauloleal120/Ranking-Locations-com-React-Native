

import React, {Component, useState, useEffect, useRef} from "react"
import {View, Text, Button, StyleSheet, TextInput, FlatList, Image, Animated, TouchableOpacity} from "react-native"
import styles from "./Styles"
import Cities from "./Cities"
import ListItems from "./listItems"

import AsyncStorage, { useAsyncStorage} from '@react-native-community/async-storage';


export default function AddCity ({navigation}){

useEffect(() => {
    
    const checkfocus = navigation.addListener('focus', () => {
      check(), check02()
    });

  }, [navigation]);

const [list, setList] = useState([])
const [nomeCidade, setNomeCidade] = useState('')
const [nomePais, setNomePais] = useState('')
const [valorCidade, setValorCidade] = useState('')
const [valorPais, setValorPais] = useState('')
const [chave, setChave] = useState(0)
const renderCount = useRef(0)

const teste = () => {

console.log("AddCity List" + list)
}

const acionar = async () => {

await AsyncStorage.setItem('chave', JSON.stringify(1))
await AsyncStorage.setItem('chaveB', JSON.stringify(1))

}

const check = async () => {
  console.log('check')
  await AsyncStorage.setItem('chave', JSON.stringify(0))
  await AsyncStorage.setItem('chaveB', JSON.stringify(0))



} 

const check02 = async ()=> {
  console.log('check02')
  const lastListJSON = await AsyncStorage.getItem('lastList')
  const lastList = JSON.parse(lastListJSON)
  console.log("AddCity lastList" + lastList)

  setList(lastList)
  setList([...list])


  
  
}



    const idGen = () => {

          const time =  new Date()
          const id = time.getHours().toString()+
                     time.getMinutes().toString()+
                     time.getSeconds().toString()+ 
                     time.getMilliseconds().toString()
                     return id
    }


 const remove = async () => {
    try {
      await AsyncStorage.removeItem('cidade');
      await AsyncStorage.removeItem('lastList')
      setList([]);
    
    } catch (e) {
      alert(e);
    }
  };






function limpar(){

  setValorCidade(''), setValorPais('')
}


const addToList = ()=> {
  list.push({id: idGen(), cidade: nomeCidade, pais: nomePais, local:[{nome:'', tipo:'', end:'', notas:''}]})
  setList([...list])
  
  console.log("addToList")
  console.log(list)
  console.log("addToList FIM")
}

const salvar = async () => {

    await AsyncStorage.setItem('lastList', JSON.stringify(list))


}



const save = async ()=> {
  console.log ("step 02 inicio save")
  const usuario = {

    id: idGen(),  cidade: nomeCidade, pais: nomePais
  }

  try{ 
       await AsyncStorage.setItem('cidade', JSON.stringify(usuario))

       console.log("step 03 pós save: usuario -> ")
       console.log("AddCity usuario" + usuario)
  } catch (e) {alert("save" + e)}
}

const showSave = async () => {

  const itemJSON = await AsyncStorage.getItem('lastList')
  const item = JSON.parse(itemJSON)

  console.log("AddCity item" + item)
} 


useEffect(()=>{
  renderCount.current = renderCount.current + 1
  console.log(renderCount.current)
  if (renderCount.current === 1 ) {
  console.log("-----------primeiro renderCount----------- ")

 

  }
})




  return(
    <View style={styles.mainContainer}>
    
    <View style={styles.logoContainer} >
      <Image style={styles.logo} source={require("./assets/snack-icon.png")}/ >
  </View>
    <TextInput style={styles.input} value={valorCidade} 
    placeholder="cidade" onChangeText={(text)=> {setNomeCidade(text), setValorCidade(text)} }/>

    <TextInput style={styles.input} value={valorPais} 
    placeholder="país" onChangeText={(text)=> {setNomePais(text), setValorPais(text)}}/>
    
    <View style={styles.buttonContainer}>
    <Button  title="SUBMIT" onPress={()=>{acionar(), addToList(), salvar(), limpar()}} />
    
    {/* 
    
    <Button title="delete" onPress={()=> {remove()}} />
    <Button title="showSave" onPress={()=> {showSave()}} />
    <Button title="teste" onPress={()=> teste()} /> 
    
    */}
  

    </View>



    
    </View>
  )
}

//25/09/2022 em 14:25
