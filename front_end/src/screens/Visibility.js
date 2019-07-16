import React, { Component } from 'react';
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';

export default class Visibility extends Component {
    const reports = [
        { key: "Light Fog" },
        { key: "Dense Fog" },
        { key: "Smog/Air Pollution" },
        { key: "Blowing Dust" },
        { key: "Blowing Snow" },
    ]
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.headerContainer}>
                    <Text style = {styles.questionText}> What kind of report?</Text>
                </View>

                <FlatList 
                data = {reports}
                renderItem = {
                    ({item, index}) => <TouchableOpacity
                    style = {styles.button}
                    onpress = {() => Alert.alert(item.key)} >
                        <Text style={styles.text}> {item.key}</Text>
                    </TouchableOpacity>
                }
                />
            </View>

        );
  } 
};

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
    text: {
        fontSize: 30,
        fontFamily: 'Arial',
        color: 'white',
    },
    questionText: {
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
