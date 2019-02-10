import React from "react";
import { StatusBar, StyleSheet, FlatList, Text, View } from "react-native";

import JourneyItem from "./Journey";

export default class JourneyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journeys: [
        {
          id: 1,
          fromLocation: "Unitec",
          toLocation: "City Center",
          role: "driver",
          numberOfPeople: "3",
          time: "04:30pm",
          date: "12/02/2019",
          status: "matched"
        },
        {
          id: 2,
          fromLocation: "New Lynn",
          toLocation: "Manukau",
          role: "passenger",
          numberOfPeople: "1",
          time: "08:30am",
          date: "8/02/2019",
          status: "closed"
        },
        {
          id: 3,
          fromLocation: "Auckland Hospital",
          toLocation: "Avondale School",
          role: "passenger",
          numberOfPeople: "2",
          time: "14:30pm",
          date: "5/02/2019",
          status: "closed"
        },
        {
          id: 4,
          fromLocation: "St Lukes Mall",
          toLocation: "Docters New Lynn",
          role: "driver",
          numberOfPeople: "1",
          time: "11:30am",
          date: "25/01/2019",
          status: "closed"
        },
        {
          id: 5,
          fromLocation: "St Lukes Station",
          toLocation: "Docters New Market",
          role: "passenger",
          numberOfPeople: "2",
          time: "10:30am",
          date: "22/01/2019",
          status: "closed"
        },
        {
          id: 6,
          fromLocation: "Park Mall",
          toLocation: "New Lynn Station",
          role: "driver",
          numberOfPeople: "1",
          time: "04:30pm",
          date: "15/01/2019",
          status: "closed"
        },
        {
          id: 7,
          fromLocation: "Allen Park",
          toLocation: "Unitec",
          role: "passenger",
          numberOfPeople: "1",
          time: "07:30am",
          date: "07/01/2019",
          status: "closed"
        },
        {
          id: 8,
          fromLocation: "Smart Statidum",
          toLocation: "Avondale Mall",
          role: "driver",
          numberOfPeople: "2",
          time: "08:30pm",
          date: "01/01/2019",
          status: "closed"
        },
        {
          id: 9,
          fromLocation: "Lukes Park",
          toLocation: "Docters Mt Albert",
          role: "passenger",
          numberOfPeople: "2",
          time: "10:30am",
          date: "23/12/2018",
          status: "closed"
        },
        {
          id: 10,
          fromLocation: "Mt Eden",
          toLocation: "One Tree Hill",
          role: "passenger",
          numberOfPeople: "2",
          time: "03:10pm",
          date: "18/12/2018",
          status: "closed"
        }
      ]
    };
  }

  _renderItem = ({ item }) => (
    <JourneyItem
      id={item.id}
      fromLocation={item.fromLocation}
      toLocation={item.toLocation}
      role={item.role}
      numberOfPeople={item.numberOfPeople}
      time={item.time}
      date={item.date}
      status={item.status}
    />
  );

  _keyExtractor = (item, index) => item.id;

  render() {
    const journeys=this.state.journeys;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={this.state.journeys}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
