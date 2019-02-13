import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import { Avatar } from 'react-native-elements';

export default class AppLoading extends React.Component {

  render() {
    return (
      <View style={{alignItems:'center'}}>
       <Avatar rounded size="large" title="Travare" />
       <Text>Share the journey.</Text>
       <Text>Share the green future...</Text>
      </View>
    );
  }
}