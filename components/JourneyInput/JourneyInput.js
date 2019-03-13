import React from "react";
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

export default class JouneryInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFromLocationFocused: false,
      isToLocationFocused: false,
      isPeopleFocused: false
    };
  }

  hanldeTimeInput = () => {};

  hanldeDateInput = () => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backButton}>
          <Button title=" < " onPress={this.props.handleBack} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[
              this.state.isFromLocationFocused
                ? styles.textInputFocused
                : styles.textInput
            ]}
            onChangeText={this.handlePasswordTextChange}
            value={this.props.text}
            placeholder="Current Location"
            placeholderTextColor="#a8a8a8"
            onBlur={() => this.setState({ isFromLocationFocused: false })}
            onFocus={() => this.setState({ isFromLocationFocused: true })}
            keyboardAppearance="light"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => this.refs.toLocationInput.focus()}
          />
          <TextInput
            style={[
              this.state.isToLocationFocused
                ? styles.textInputFocused
                : styles.textInput
            ]}
            onChangeText={this.handlePasswordTextChange}
            value={this.props.text}
            placeholder="Where to?"
            placeholderTextColor="#a8a8a8"
            onBlur={() => this.setState({ isToLocationFocused: false })}
            onFocus={() => this.setState({ isToLocationFocused: true })}
            keyboardAppearance="light"
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => this.refs.peopleInput.focus()}
            ref={input => (this.toLcationInput = input)}
          />
          <TextInput
            style={[
              this.state.isPeopleFocused
                ? styles.textInputFocused
                : styles.textInput
            ]}
            onChangeText={this.handlePasswordTextChange}
            value={this.props.text}
            placeholder="How many people"
            placeholderTextColor="#a8a8a8"
            onBlur={() => this.setState({ isPeopleFocused: false })}
            onFocus={() => this.setState({ isPeopleFocused: true })}
            keyboardAppearance="light"
            keyboardType="numeric"
            returnKeyType="next"
            ref={input => (this.peopleInput = input)}
          />
          <View style={styles.inputButtonContainer}>
            <TouchableOpacity onPress={this.hanldeTimeInput}>
              <Text style={styles.inputButton} >
              Time
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.hanldeDateInput}>
            <Text  style={styles.inputButton}>
             Date
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  backButton: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    height: 35,
    width: "80%",
    backgroundColor: "#efefef",
    borderRadius: 5
  },
  textInputFocused: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    height: 35,
    width: "80%",
    backgroundColor: "#fcfcfc",
    borderColor: "#efefef",
    borderWidth: 0.5,
    borderRadius: 5
  },
  inputButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  inputButton: {
    flex: 1,
    margin: 10,
    width: "40%"
  }
});
