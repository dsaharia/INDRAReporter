import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';


export default class Rain extends Component {
    render() {
        const rainData = [
            {key : "Light Rain"},
            {key : "Heavy Rain"},
            {key : "Freezing Rain"},
            {key : "Freezing Drizzle"},
            {key : "Snow"},
            {key : "Mixed Rain and Snow"},
        ]
        
        return (
            <View style={styles.container}>
            <FlatList
            data = {rainData}
            renderItem = {
                ({item}) => <TouchableOpacity style={styles.button}>
                    <Text style={styles.rainText}>{item.key}</Text>
                </TouchableOpacity>
            }
            />
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#81d4fa',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1e88e5',
        padding: 10,
        borderRadius: 6,
        margin: 2,
        borderWidth: 0.5,
    },
    rainText: {
        fontSize: 30,
        fontFamily: 'monospace',
        color: 'white',
    },
});