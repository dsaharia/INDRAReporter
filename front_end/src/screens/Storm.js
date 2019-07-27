import React, { Component } from 'react';
import { Text, TouchableOpacity, View, FlatList, StyleSheet } from 'react-native';

const reports = [
    { key: "Cyclone" },
    { key: "Tornado" },
    { key: "Lightning/thunderstorm" },
    { key: "Sand/dust storm" },
    { key: "Winter storm/blizzard" },
    { key: "Wind" },
    { key: "Severe storm" },
]
const colors = ['#29b6f6', '#039be5']

export default class Visibility extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.navigation.state.params)
    }
    onSelect = (option) => {
        this.props.navigation.state.params.selectReport(option);
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.headerContainer}>
                    <Text style = {styles.questionText}> What are you seeing?</Text>
                </View>

                <FlatList 
                data = {reports}
                renderItem = {
                    ({item, index}) => <TouchableOpacity
                    style = {[styles.button, {backgroundColor: colors[index % colors.length]}]}
                    onPress = {() => this.onSelect(item.key)} >
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
        backgroundColor: '#b3e5fc',
        paddingLeft: 15,
        paddingRight: 15,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        
    },
    text: {
        fontSize: 25,
        fontFamily: 'Arial',
        color: 'white',
    },
    questionText: {
        fontSize: 30,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
        paddingTop: 30,
    }
});