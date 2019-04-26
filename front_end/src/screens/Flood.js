import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    Alert,
} from 'react-native';

export default class Flood extends Component {
    render() {
        onPressFlood = () => {
            Alert.alert(" Flood ");
        }
        return (
            <View style={styles.container}>
                <Text style={styles.floodText}>Flood</Text>
                <Button
                    title="Flood"
                    onPress={() => this.props.navigation.navigate('Flood')}
                    color = 'blue'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    floodText: {
        fontSize: 30,
        fontFamily: 'monospace',
    },
});