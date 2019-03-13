import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

export default class Splash extends React.Component {

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.logo}>Travare</Text>
       <Text style={styles.text}>Share the journey.</Text>
       <Text style={styles.text}>Share the green future...</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
   container:{
     flexDirection:'column',
     backgroundColor:'#0984e3',
     justifyContent: "center",
     alignItems: "center",
     height:'100%'
   },
   logo:{
     marginVertical:5,
     height:100,
     width:100,
     borderWidth:4,
     borderRadius:30,
     borderColor:'white',
     color:'white',
     textAlign:'center',
     paddingHorizontal:5,
     paddingVertical:32,
     fontSize:25
   },
   text:{
     fontSize:20,
     marginVertical:5,
     color:'#74b9ff'
   }
});