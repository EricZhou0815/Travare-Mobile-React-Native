import React from 'react';
import Profile from '../components/Profile/Profile';

export default class ProfilesScreen extends React.Component {
  static navigationOptions = {
    title: 'Travare',
  };

  constructor(props) {
    super(props);
    this.state = {
      profile:{
          firstName:'Eric',
          lastName:'Luis',
          city:'Armsterdam',
          country:'Nethelands',
          about:'Armsterdam University Sutdent, love traveling.',
          email:'EricL@armsterdam.edu.net',
          mobile:'+57 0043 4467819',
          greenLevel:8,
          CO2Reduction:1560,
          notification:true,
      }
    }
  }

  render() {
    return (<Profile firstName={this.state.profile.firstName} 
             lastName={this.state.profile.lastName} 
             city={this.state.profile.city} 
             country={this.state.profile.couontry} 
             about={this.state.profile.about} 
             email={this.state.profile.email} 
             mobile={this.state.profile.mobile} 
             greenLevel={this.state.profile.greenLevel} 
             CO2Reduction={this.state.profile.CO2Reduction} />
    );
  };
};

