import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';

const colors = ['#91cfe6', '#8abccf', '#73a2c6', '#5d8abd', '#4771b2', '#2e59a8', '#00429d', ]

export default class Rain extends Component {
    render() {
        const rainData = [
            { key: "No Rain" },
            { key: "Light Rain" },
            { key: "Heavy Rain" },
            { key: "Freezing Rain" },
            { key: "Freezing Drizzle" },
            { key: "Snow" },
            { key: "Mixed Rain and Snow" },
        ]

        return (
            <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}> What kind of rain?</Text>
            </View>
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
        backgroundColor: '#9E9E9E',
        paddingLeft: 15,
        paddingRight: 15,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e88e5',
        height: 50,
    },
    rainText: {
        fontSize: 30,
        fontFamily: 'Arial',
        color: 'white',
    },
    headerText: {

        fontSize: 30,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingBottom: 30,
        paddingTop: 30,
    }
});
