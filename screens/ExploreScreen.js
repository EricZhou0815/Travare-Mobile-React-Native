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
import { CheckBox } from "react-native-elements";
import Map from "../components/Map/Map";
import ButtonIcon from "../components/ButtonIcon";
import JourneyInput from '../components/JourneyInput/JourneyInput';

export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: "Travare"
  };

  constructor() {
    super();
    this.state = {
      isSelectRole:true,
      isPassenger: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isSelectRole && <JourneyInput handleBack={()=>{this.setState({isSelectRole:true})}} />}
        <Map />
        {this.state.isSelectRole &&
        <View style={styles.tabBarContainer}>
          <Text style={styles.tabBarText}>I'm a</Text>
          <View style={{ flex: 3, flexDirection: "column",alignItems:'left',marginLeft:10 }}>
            <CheckBox
              center
              title="Passenger"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.state.isPassenger}
              onPress={() => this.setState({ isPassenger: !this.state.isPassenger })}
            />
            <CheckBox
              center
              title="Driver"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={!this.state.isPassenger}
              onPress={() => this.setState({ isPassenger: !this.state.isPassenger })}
            />
          </View>
          <View style={{flex:2,alignItems:'center'}}>
            <TouchableOpacity>
            <ButtonIcon style={{width:100,height:100}}
              name={
                Platform.OS === "ios"
                  ? `ios-add-circle`
                  : "md-information-circle"
              }
              onPress={()=>this.setState({isSelectRole:false})}
            />
            </TouchableOpacity>
          </View>
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  tabBarContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 5
  },
  tabBarText:{
    paddingLeft:20,
    fontSize:20
  }
});
