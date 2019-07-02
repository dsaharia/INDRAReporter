import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SelectedReport = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Selected Report:</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#093F61',
        paddingTop: 15,
        paddingLeft: 10,
        paddingBottom: 15,
        paddingRight: 15,
        left: 11,
        right: 11,
        bottom: 5,
        borderRadius: 13,
    },
    text: {
        fontFamily: 'Ariel',
        fontSize: 15,
        color: 'white',
         // crashed the app?
    }
})
export default SelectedReport;
