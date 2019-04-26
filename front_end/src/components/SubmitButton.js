import React, { Component } from "react"
import { Alert, Button, StyleSheet, View} from "react-native"

export default class SubmitButton extends Component {
    render() {
        onPress = () => {
            Alert.alert(" Thank you for Submitting Report ");
        }
    
        return (
            <View style={styles.submitButton}>
                <Button 
                    onPress={() => onPress()}
                    title="Submit Report"
                    color='#093F61'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
        submitButton:
        {
            width: '100%',
            position: 'absolute',
            bottom: 0,
            borderRadius: 40,
            shadowRadius: 200,
            paddingVertical: 30,
            paddingHorizontal: 10,
            //alignItems: "center"

        },
});