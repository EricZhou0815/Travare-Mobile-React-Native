import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class ButtonIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={60}
        style={{ marginBottom: -10,color:'#427df4' }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}