import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';
// NOTE - localhost does not work, make the PC's ip and host the django project in that Ip

export default class Flood extends Component {
    constructor() {
        super();
        this.state = {
            latitude: null,
            longitude: null,
            error: null
        };
    }
    dataAPI = () => {
        const url = 'http://10.55.2.40:8000/api/report'
        fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    latitude: '-666.8',
                    longitude: '-1234.5',
                    timestamp: '10101010',
                    report_type: 'HAIL',
                })
            })
            .then(result => result.json())
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }
    getLocation = () => {
        let geoOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
        };
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });


            },
            error => Alert.alert(error.message), geoOptions);

    }
    render() {

        return (

            <View style={styles.container}>
                <TouchableOpacity onPress = {this.getLocation} style={styles.button}>
                    <Text style={styles.floodText} >LATITUDE: {this.state.latitude}</Text>
                    <Text style={styles.floodText} >LONGITUDE: {this.state.longitude}</Text>
                    {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={this.dataAPI} style={styles.button}>
                    <Text> FETCH DATA</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    floodText: {
        fontSize: 30,
        fontFamily: 'monospace',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});