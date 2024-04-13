import {StyleSheet, Animated} from "react-native"



const Styles = StyleSheet.create({


listContainer:{

  padding:10
},

addCity:{

  backgroundColor:"#ac00b6"
},


mainContainer:{
  
flex:1,
display:'flex', 
alignContent:"center",
justifyContent:'center',
textAlign:'center',
marginTop: "0%",
backgroundColor:"#ac00b6"

},

input:{

  borderWidth:1, 
  borderColor:'gray',
  padding: 10,
  margin: 10,
  backgroundColor:'white'
},

buttonContainer:{

padding: 10,

},

listaCidades:{

margin:10
},

btnLocal:{
marginLeft: "70%",  
width: 50,
height: 50,
borderRadius: 50,
backgroundColor: "orange",
textAlign: 'center',
justifyContent:'center'

},

txtInAddLocal:{
backgroundColor:'#e2e2e2',
height: 40,
margin: 5,
marginTop: 70,
padding: 10,
},

txtInAddLocall:{
backgroundColor:'#e2e2e2',
height: 40,
margin: 5,
padding: 10,

},

txtInAddLocalll:{
backgroundColor:'#e2e2e2',
height: 100,
margin: 5,
padding: 10,

},

addLocalContainer:{
flex:1, 
backgroundColor:'#f2f2f2',
margin: 10,

},

addLocationBtn:{

height: 40,
margin: 5,
backgroundColor: '#8e8e8e',
textAlign:'center',
justifyContent:'center',
fontFamily:'arial'

},

addLocationBtnClose:{
height: 40,
width: 60,
margin: 5,
marginTop: 100,
backgroundColor: '#8e8e8e',
textAlign:'center',
justifyContent:'center',
fontFamily:'arial'

},

logo:{

        width: "40%",
        height: 50,

},

logoContainer:{
alignItems:'center',
justifyContent:'center',

},

container:{
  height: 150,
  width: "80%",
  backgroundColor:'pink',
  justifyContent:'center',
  textAlign:'center',
  margin:'30px'
  
},

line:{

  backgroundColor:'gray',
  width:"80%",
  height:'1px',
  margin:'25px'

}

})



export default Styles