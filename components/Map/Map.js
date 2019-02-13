import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import MapView from "react-native-maps";

export default class Map extends React.Component {
  render() {
    return (
      <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -36.8848403,
              longitude: 174.7158347,
              latitudeDelta: 0.0100,
              longitudeDelta: 0.0100
            }}
          />
        </View>
 
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 600
  },
  map: {
    width: "100%",
    height: "100%"
  }
});
