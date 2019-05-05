import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Alert,
} from 'react-native';

export default class Rain extends Component {
    render() {
        onPressFlood = () => {
            Alert.alert(" Rain ");
        }
        return (
            <View style={styles.container}>
            <Text>Rainr</Text>
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