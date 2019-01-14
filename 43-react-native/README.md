# React Native

## Vocabulary

* Expo 
  * A toolchain for React Native Apps, similar to create-react-app
* `View`
  * React Natives equivalent to a div
* `Stylesheet.create`
* `Camera`
  * A component which accesses a users camera
* `Permissions`
  * A tool which can be used to request permissions from the user to access hardware like the camera
* `DangerZone`
  * A Namespace that expo uses for APIs that are likely to change

## Outline

* Installation
  * Install **Expo** with `--global`
  * Run `expo init <project name>`
  * Start the app with `expo start`
* Navigating our App
  * What are views?
  * How do styles work?
* Accessing a users camera
  * Using the Camera component
  * Using the Permissions object
* Accessing a users rotation data
  * Using DangerZone

```

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraScreen extends React.Component {
  
 state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const permission = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: permission.status === 'granted' });
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
        { this.state.hasCameraPermission &&
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        }
        </View>
      );
  }
}
```





```
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
```



