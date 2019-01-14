import React from 'react'
import { Text, View } from 'react-native'
import { DangerZone } from 'expo'

const { DeviceMotion } = DangerZone

export default class MotionScreen extends React.Component {

    state = {
        rotation: {
            alpha: 0,
            beta: 0,
            gamma: 0
        }
    }

    componentDidMount(){
        DeviceMotion.addListener( ({ rotation }) => {
            this.setState({ rotation })
        })
    }

    render(){
        console.log(this.state.rotation)
        const { alpha, beta, gamma } = this.state.rotation
        return (
            <View style={{flex:1}}>
                <Text style={{fontSize:35}}>Alpha: {alpha}</Text>
                <Text style={{fontSize:35}}>Beta: {beta}</Text>
                <Text style={{fontSize:35}}>Gamma: {gamma}</Text>
            </View>
        )
    }

}