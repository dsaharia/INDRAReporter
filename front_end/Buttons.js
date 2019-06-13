
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Buttons extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Flood')}
                style={styles.button}>
                    <Text style = {styles.text}>
                        Flood
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Rain')}
                style={styles.button}>
                    <Text style = {styles.text}>
                        Rain
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b3e5fc',
        padding: 8,
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        fontFamily: 'monospace'
    },
    button:{
        alignItems: 'center',
        backgroundColor: '#64b5f6',
        padding: 10,
        borderRadius: 6,
        margin: 2,
        borderWidth: 0.5,
    },
});