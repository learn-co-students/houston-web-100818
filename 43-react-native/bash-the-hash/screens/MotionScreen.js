import React from 'react';
import { Text, View } from 'react-native';
import { DangerZone } from 'expo';
const { DeviceMotion } = DangerZone
var i

export default class MotionScreen extends React.Component {

    state = {
        rotation: {
            alpha: 0, 
            beta: 0,
            gamma: 0
        }
    }

  async componentDidMount() {
    DeviceMotion.addListener(({ rotation }) => {
        this.setState({ rotation })
    })
  }

  render() {
      const { alpha, beta, gamma } = this.state.rotation
    return (
        <View style={{ flex:1 }}>
            <Text style={{fontSize: 30}}>Something Else{alpha}</Text>
            <Text style={{fontSize: 30}}>{beta}</Text>
            <Text style={{fontSize: 30}}>{gamma}</Text>
        </View>
      );
  }
}