import React, { Component } from "react";
import { TouchableOpacity, Text, Alert, StyleSheet, View} from "react-native";

const url = 'http://10.0.2.2:8000/api/add/';

export default class SubmitButton extends Component {
    constructor(props) {
        super(props);
    }
    sendData = ()  => {
        const data = {
            lat: this.props.data.latitude,
            lon: this.props.data.longitude,
            category: this.props.data.category,
            description: this.props.data.description,
            description_id: this.props.data.description_id,
        }
        console.log('ddd', JSON.stringify(data))
        fetch(url, {
                method: 'POST',
                headers: {
                     'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '127.0.0.1:8000'

                },
                body: JSON.stringify(data),
            })
            // .then(Alert.alert(" Thanks for your citizen science report! "))
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error =>console.log(error))
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
