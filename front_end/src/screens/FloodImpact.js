import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';

export default class FloodImpact extends Component {
    const reports = [
        { key: "Minimal" },
        { key: "Minor" },
        { key: "Significant" },
        { key: "Severe" },
    ]

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.headerContainer}>
                    <Text style = {styles.questionText}> What are you seeing?</Text>
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
}