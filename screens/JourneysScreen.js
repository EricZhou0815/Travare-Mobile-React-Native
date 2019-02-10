import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import JourneyList from '../components/JourneyList/JourneyList';

export default class JouneryScreen extends React.Component {
  static navigationOptions = {
    title: 'Travare',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <JourneyList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

