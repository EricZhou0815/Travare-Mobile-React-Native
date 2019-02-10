import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput
} from "react-native";

export default class JourneyItem extends React.Component {

  handleLogin=()=>{
     this.props.handleLogin();
  };

  handleRegister=()=>{
     this.props.handleRegister();
  };

  hanldeUserNameTextChange=()=>{
      this.props.handleUserNameTextChange();
  };

  hanldePasswordTextChange=()=>{
    this.props.handlePasswordTextChange();
};

  render() {
    return (
      <View style={styles.authField}>
        <View style={styles.authInput}>
        <Text style={styles.authInputTitle}>Username</Text>
        <TextInput style={styles.authInputText}
          onChangeText={this.handleUserNameTextChange}
          value={this.props.text}
        />
        <Text style={styles.authInputTitle}>Password</Text>
        <TextInput style={styles.authInputText}
          onChangeText={this.handlePasswordTextChange}
          value={this.props.text}
        />
        </View>
        <View style={styles.authButton}>
        <Button title="Login" onPress={this.handleLogin}/><Button title="Register" onPress={this.handleRegister}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    authField:{
        flex:1,
        margin:5,
        alignItems:'center'
    },
    authInput:{
        flex:4,
        height:200,
        padding:10
    },
    authInputTitle:{
        fontSize:20,
        color:'blue'
    },
    authInputText:{
        fontSize:18,
        backgroundColor:'grey',
        height:50,
        borderWidth:1,
        borderRadius:10
    },
    authButton:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        height:100,
    }
});
