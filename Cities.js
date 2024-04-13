import React, { Component, useState, useEffect, useRef } from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  Animated, 
  TouchableOpacity,
} from 'react-native';

import styles from './Styles';
import AddCity from './AddCity';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native'

import ListItems from "./listItems"
import ListLocalidades from "./ListLocalidades"
import ListLocalidades2 from "./ListLocalidades2"
import AddLocal from "./AddLocal"
import ActionDel from "./actionDel"






export default function Cities({navigation}) {

  useEffect(() => {

    const checkfocus = navigation.addListener('focus', () => {
      check()
    });

  }, [navigation]);
  
  const [alfa, setAlfa] = useState([])
  const [tempList, setTempList] = useState([])
  const [lista, setLista] = useState()
  const [cidade, setCidade] = useState('')
  const [pais, setPais] = useState('')
  const [chave, setChave] = useState(0)
  const [temp, setTemp] = useState() 
  const renderCount = useRef(0)
  const navi = useNavigation()



const separator = () => {return(<View style={{width: "100%", height: 1, backgroundColor:'lightgray'}}></View>)}


const check = async () => {



  const lastListJSON = await AsyncStorage.getItem('lastList')
  const lastList = JSON.parse(lastListJSON)
  await AsyncStorage.setItem('chaveLoadList', JSON.stringify(0))
  console.log('lastList primeiro render ---------->')
  console.log("Cities LastList --->")
  console.log(lastList)
  setLista(lastList)
  setLista([...lista])
 

  }

  const remove = async () => {
    try {
      await AsyncStorage.removeItem('cidade');
      await AsyncStorage.removeItem('lastList')
      setLista([]);
    } catch (e) {
      alert(e);
    }
  };


useEffect(() => {
    renderCount.current = renderCount.current + 1

  });

 
  
  const handleDelete = item => {

    setLista(lista.filter((i)=> i.id !== item.id))
  
      
    }

   
    const salvar = async (item) => {

    await AsyncStorage.setItem('lastList', JSON.stringify(lista.filter((i)=> i.id !== item.id)))}



  return (
    <View>
      
      <FlatList
      data={lista}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={()=>separator()}
      renderItem={({item})=><ListItems data={item} nData={lista} onPress={()=> <ActionDel onPress={handleDelete(item), salvar(item), showLastList()} /> } />}
      />

    </View>
  );
}

const Localidades = ({navigation}) => {

useEffect(() => {

    const checkfocus = navigation.addListener('focus', () => {
      check()


    });

  }, [navigation]);

  
const renderCount = useRef(0)
const navi = useNavigation()
const [lista, setLista] = useState()
const [fullLista, setFullLista] = useState()

  const filtro = (x, y)=>{

    let novaLista = x.filter((item)=>{return item.id == y})
    return novaLista
  }


const check = async ()=> {


  const getShowLocalJSON = await AsyncStorage.getItem('showLocal')
  const getShowLocal = JSON.parse(getShowLocalJSON)
  
  const lastListJSON = await AsyncStorage.getItem('lastList')
  const lastList = JSON.parse(lastListJSON)

  

 
  await AsyncStorage.setItem('chaveLoadList', JSON.stringify(0))

  setLista(filtro(lastList, getShowLocal))
  setLista([...lista])

}

return (
  
<View style={{height:"100%"}} >

<FlatList
data={lista}
renderItem={({item, index})=> <ListLocalidades index={index} data={item} novaData={fullLista} />  }
/>


<TouchableOpacity onPress={()=> {navi.navigate("AddLocall", {lista:fullLista} )} } style={styles.btnLocal}>
<Text> BTN </Text>
</TouchableOpacity> 


</View>




  
)};



const Localidades2 = ({navigation}) => {

useEffect(() => {

    const checkfocus = navigation.addListener('focus', () => {
      check()


    });

  }, [navigation]);

  
const renderCount = useRef(0)
const navi = useNavigation()
const [lista, setLista] = useState()
const [fullLista, setFullLista] = useState()

  const filtro = (x, y)=>{

    let novaLista = x.filter((item)=>{return item.id == y})
    return novaLista
  }


const check = async ()=> {


  const getShowLocalJSON = await AsyncStorage.getItem('showLocal')
  const getShowLocal = JSON.parse(getShowLocalJSON)
  
  const lastListJSON = await AsyncStorage.getItem('lastList')
  const lastList = JSON.parse(lastListJSON)

  

 
  await AsyncStorage.setItem('chaveLoadList', JSON.stringify(0))

  setLista(filtro(lastList, getShowLocal))
  setLista([...lista])

}




  
return (
  <>
<View>
<Button onPress={()=> console.log(fullLista) } />

<FlatList
data={lista}
renderItem={({item})=> <ListLocalidades2 data={item} novaData={fullLista} />  }
/>



</View>



</>
  
)};














const AddLocall = ({navigation}) => {

useEffect(() => {

    const checkfocus = navigation.addListener('focus', () => {
      check()


    });

  }, [navigation]);

  
const renderCount = useRef(0)
const navi = useNavigation()
const [lista, setLista] = useState()

  const filtro = (x, y)=>{

    let novaLista = x.filter((item)=>{return item.id == y})
    return novaLista
  }


const check = async ()=> {


  const getShowLocalJSON = await AsyncStorage.getItem('showLocal')
  const getShowLocal = JSON.parse(getShowLocalJSON)
  
  const lastListJSON = await AsyncStorage.getItem('lastList')
  const lastList = JSON.parse(lastListJSON)

  

 
  await AsyncStorage.setItem('chaveLoadList', JSON.stringify(0))

  setLista(filtro(lastList, getShowLocal))
  setLista([...lista])


}


  
return (
<View>

<FlatList
data={lista}
renderItem={({item})=> <AddLocal data={item}/>  }
/>




</View>


  
)};

export {AddLocall}
export {Localidades}
export{Localidades2}










