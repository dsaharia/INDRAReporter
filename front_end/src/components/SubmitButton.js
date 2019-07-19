import React, { Component } from "react";
import { TouchableOpacity, Text, Alert, StyleSheet, View} from "react-native";

const url = 'https://indrareport.herokuapp.com/api/report/';

export default class SubmitButton extends Component {
    constructor(props) {
        super(props);
    }
    sendData = ()  => {
        const data = {
            latitude: this.props.data.latitude,
            longitude: this.props.data.longitude,
            timestamp: this.props.data.timestamp,
            reporttype: this.props.data.reporttype,
        }
        // console.log(data)
        fetch(url, {
                method: 'POST',
                headers: {
                     'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(Alert.alert(" Thanks for your citizen science report! "))
            // .then(response => response.json())
            // .then(result => console.log(result))
            .catch(error => Alert.alert(error))
    }
    render() {
        return (
            <View style={styles.submitButton}>
                <TouchableOpacity onPress={this.sendData}>
                    <Text style={styles.text}>Submit Report</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        submitButton: {
            // width: '100%',
            position: 'absolute',
            bottom: 10,
            borderRadius: 13,
            paddingVertical: 15,
            paddingHorizontal: 10,
            alignItems: 'center',
            backgroundColor: '#093F61',
            left: 11,
            right: 11,
        },
        text: {
            justifyContent: 'center',
            fontSize: 20,
            color: 'white',
            fontFamily: 'Arial',

        }
});
