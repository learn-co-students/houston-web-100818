import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Camera, Permissions } from 'expo'
const foo = 0
export default class CameraScreen extends React.Component {

    state = {
        hasPermission: null,
        type: Camera.Constants.Type.back
    }

    async componentDidMount(){
        const permission = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({ hasPermission: permission.status === 'granted'})
    }

    render(){
        return (
            <View style={{ flex: 1}}>
                { this.state.hasPermission &&
                <Camera style={{ flex: 1 }} type={this.state.type}>
                    <View style={{ 
                        flex:1, 
                        backgroundColor: 'transparent',
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center'
                        }}
                            onPress={() => {
                                this.setState({
                                    type: this.state.type === Camera.Constants.Type.back 
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                })
                            }}
                        >
                            <Text style={{ fontSize:18, color: 'white'}}>
                                Flip
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
                }
            </View>
        )
    }

}