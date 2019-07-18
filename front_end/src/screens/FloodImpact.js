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
    { key: "MINIMAL - Isolated flooding in low-lying areas. Wet road surfaces." },
    { key: "MINOR - Localized flooding of land and roads. Disruption of travel to key flooding sites." },
    { key: "SIGNIFICANT - Affecting section of communities. Flooded street and stranded vehicles." },
    { key: "SEVERE - Affecting entire communities. Buildings swept away. Large scale evacuation." },
]

const colors = ['#74a9cf', '#0571b0', '#fdae61', '#d7191c']
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e88e5',
    },
    text: {
        fontSize: 22,
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