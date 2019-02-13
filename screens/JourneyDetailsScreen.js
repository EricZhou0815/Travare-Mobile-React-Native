import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";


export default class JouneryDetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Travare"
  };

  render() {

    return (
      <ScrollView style={styles.container}>
      <View>
          <Text>JourneyDetails</Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});