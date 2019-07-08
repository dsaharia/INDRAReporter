import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';

const colors = ['#8abccf', '#73a2c6', '#5d8abd', '#4771b2', '#2e59a8', '#00429d', ]

export default class Rain extends Component {
    render() {
        const rainData = [
            { key: "Light Rain" },
            { key: "Heavy Rain" },
            { key: "Freezing Rain" },
            { key: "Freezing Drizzle" },
            { key: "Snow" },
            { key: "Mixed Rain and Snow" },
        ]

        return (
            <View style={styles.container}>
            <FlatList
            data = {rainData}
            renderItem = {
                ({item, index}) => <TouchableOpacity
                style={[styles.button, {backgroundColor: colors[index % colors.length]}]}
                onPress = {() => Alert.alert(item.key)}
                >
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
    },
    rainText: {
        fontSize: 30,
        fontFamily: 'Ariel',
        color: 'white',
    },
});