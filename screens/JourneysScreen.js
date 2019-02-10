import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import JourneyList from "../components/JourneyList/JourneyList";
import Auth from "../components/Auth/Auth";

export default class JouneryScreen extends React.Component {
  static navigationOptions = {
    title: "Travare"
  };

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      inputUserName: "",
      inputPassword: "",
      id: "",
      token: ""
    };
  }

  hanldeUserNameTextChange = (text) => {
    this.setState({ inputUserName:text});
  };

  hanldePasswordTextChange = (text) => {
    this.setState({ inputPassword:text});
  };

  handleLogin = () => {
    console.log('Logined');
    this.setState({ isLogin:true});
    this.forceUpdate();
  };

  handleRegister = () => {
    console.log('Registered');
    this.setState({ isLogin:true});
    this.forceUpdate();
  };

  render() {

    return (
      <ScrollView style={styles.container}>
      {this.isLogin &&
        <Auth
          handleUserNameTextChange={this.hanldeUserNameTextChange}
          handlePasswordTextChange={this.hanldePassowrdTextChange}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
        />
      }
      {!this.isLogin && <JourneyList />}
      {console.log(this.state)}
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
