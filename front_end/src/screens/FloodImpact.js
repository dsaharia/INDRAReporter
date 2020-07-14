import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Alert,
    TouchableOpacity,
    FlatList,
} from 'react-native';

const reports = [
    { key: "NONE - No flooding observed" },
    { key: "MINOR - Flooding in low-lying areas, some inconvenience to the public." },
    {"key": "MODERATE - Flooded roads. Disruption of travel to flooding sites"},
    { key: "MAJOR -  Affecting communities. Flooded roads, stranded vehicles, and inundated houses." },
    { key: "SEVERE - Large scale evacuation of people. Permanent houses and vehicles swept away" },
]

const colors = ['#74a9cf', '#0571b0', '#fdae61', '#FF3333','#d7191c']
export default class FloodImpact extends Component {
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
            <View style={styles.container}>
                <View style = {styles.headerContainer}>
                    <Text style = {styles.questionText}> What are you experiencing?</Text>
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 110,
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
        fontFamily: 'Arial',
        color: 'white',
        textAlign: 'left',
        padding: 5,
    },
    questionText: {
        fontSize: 25,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
        paddingTop: 30,
    }
});