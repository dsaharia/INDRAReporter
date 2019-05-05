
import React, {Component} from 'react';
import {
    View,
    Button,
} from 'react-native';

export default class Buttons extends Component {
    render() {
        return (
            <View>
                <Button
                    title="Flood"
                    onPress={() => this.props.navigation.navigate('Flood')}
                    color = 'blue'
                />
                <Button
                    title="Rain"
                    onPress={() => this.props.navigation.navigate('Rain')}
                    color = 'red'
                />
            </View>
        );
    }
}