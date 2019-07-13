import React, { Component } from "react"
import { TouchableOpacity, Text, Alert, Button, StyleSheet, View} from "react-native"

export default class SubmitButton extends Component {
    render() {
        onSubmission = () => {
            Alert.alert(" Thanks for your citizen science report! ");
        }

        return (
            <View style={styles.submitButton}>
                <TouchableOpacity onPress={() => onSubmission()}>
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
            fontFamily: 'Ariel',

        }
});
