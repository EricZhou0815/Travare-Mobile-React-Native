import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={{flex:1,flexDrection:'colmun'}}>
        <View>
        <View>
            
        </View>
        <Avatar
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
          }}
        />
        </View>
        <View style={{flex:1}}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode={"tail"}>
            From {this.props.fromLcation} to {this.props.toLocation}
          </Text>
          <Text style={styles.theText} numberOfLines={1} ellipsizeMode={"tail"}>
            {this.props.numberOfPeople} People | {this.props.role}
          </Text>
          <Text style={styles.theText} numberOfLines={1} ellipsizeMode={"tail"}>
            {this.props.time} {this.props.date}
          </Text>
        </View>
        <View>
          <Text style={styles.buttonText}>{this.props.status}</Text>
        </View>
      </View>
    );
  }
}