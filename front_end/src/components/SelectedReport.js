import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SelectedReport = () => (
    <View>
        <Text style={styles.text}>Selected Report</Text>
    </View>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'monospace',
        fontSize: 17,
        textAlign: 'center',
        // position: 'absolute',
        // bottom: '10', // crashed the app?
    }
})
export default SelectedReport;
