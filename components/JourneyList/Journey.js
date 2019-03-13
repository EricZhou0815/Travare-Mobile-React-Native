import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
  } from 'react-native';

export default class JourneyItem extends React.Component {
    
    onShowJourneyDetails=()=>{
      //const id=this.props.id;
      /*this.props.navigation.navigate('JourneyDetails');*/
    }

    render() {
        /*const {navigate}=this.props.navigation;*/
        return(
          <TouchableOpacity /*onPress={()=>navigate('JourneyDetails')}*/>
          <View style={styles.rowContainer}>
            <View style={styles.rowText}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                From {this.props.fromLcation} to {this.props.toLocation}
              </Text>
              <Text style={styles.theText} numberOfLines={1} ellipsizeMode ={'tail'}>
              {this.props.numberOfPeople} People | {this.props.role}
              </Text>
              <Text style={styles.theText} numberOfLines={1} ellipsizeMode ={'tail'}>
                {this.props.time} {this.props.date}
              </Text>
            </View>
            <View>
              <Text style={styles.buttonText}>{this.props.status}</Text>
            </View>
          </View>
          </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  theText: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  },
  buttonText:{
    color:'#ffffff',
    backgroundColor: '#1E90FF',
    padding:5,
    fontSize:14,
    borderRadius:10
  },
  });