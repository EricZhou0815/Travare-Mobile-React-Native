import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Switch} from "react-native";
import { Avatar } from "react-native-elements";

export default class Profile extends React.Component {
    toggleTheSwitch=(value)=>{
        this.setState({switchValue:value});
    }
    
  render() {
    return (
      <View style={{ flex: 1, flexDrection: "colmun" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 1, height: 50 }}>
              <Text style={styles.title}>
                {this.props.firstName} {this.props.lastName}
              </Text>
              <Text style={styles.theText} ellipsizeMode={"tail"}>
                {this.props.city}, {this.props.country}
              </Text>
            </View>
            <View style={{ flex: 1, height: 50 }}>
              <Text style={styles.title}>About {this.props.firstName}</Text>
              <Text style={styles.theText} ellipsizeMode={"tail"}>
                {this.props.about}
              </Text>
            </View>
          </View>
          <Avatar style={{flex:1}}
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
            }}
          />
        </View>
        <View style={{ flex: 1, height: 50 }}>
          <Text style={styles.title}>Email</Text>
          <Text style={styles.theText} ellipsizeMode={"tail"}>
            {this.props.email}
          </Text>
        </View>
        <View style={{ flex: 1, height: 50 }}>
          <Text style={styles.title}>Mobile</Text>
          <Text style={styles.theText} ellipsizeMode={"tail"}>
            {this.props.mobile}
          </Text>
        </View>
        <View style={{ flex: 1, height: 50 }}>
          <Text style={styles.title}>Green Level: {this.props.greenLevel}</Text>
          <Text style={styles.theText} ellipsizeMode={"tail"}>
            CO2 reduction: {this.props.CO2Reduction} kg
          </Text>
        </View>

        {/*<View style={{ flex: 1, height: 50 }}>
          <Text style={styles.title}>Notification</Text>
          <Switch
            onValueChange={this.toggleTheSwitch}
            switchValue={this.state.switchValue}
          />
          </View>*/}

        <View style={{ flex: 1, height: 50 }}>
          <Text style={styles.title}>Logout</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#CCC",
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#777"
  },
  theText: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: "#777"
  },
  rowText: {
    flex: 4,
    flexDirection: "column"
  },
  buttonText: {
    color: "#ffffff",
    backgroundColor: "#1E90FF",
    padding: 5,
    fontSize: 14,
    borderRadius: 10
  }
});
