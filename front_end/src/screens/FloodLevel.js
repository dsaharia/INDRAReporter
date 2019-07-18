import React, { Component } from 'react';
import { Text, Alert, ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import VerticalSlider from 'rn-vertical-slider';

const url = 'https://indrareport.herokuapp.com/api/report/';

export default class FloodLevel extends Component {
    constructor(props) {
        super(props)
        const { lat, long, timestamp } = this.props.navigation.state.params
        this.state = {
            sliderVal: null,
            lat: lat,
            long: long,
            timestamp: timestamp,
        }
        console.log(this.state)
    }
    onSubmission = () => {
        const data = {
            latitude: this.state.lat,
            longitude: this.state.long,
            timestamp: this.state.timestamp,
            reporttype: this.state.sliderVal,
        }
        console.log(data)
        fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(Alert.alert("Success"))
            // .then(response => response.json())
            // .then(result => console.log(result))
            .catch(error => console.log(error))

        Alert.alert(JSON.stringify(this.state.sliderVal));
    }
    render() {
        return (
            <View style={styles.container}>
      <ImageBackground source={require('./man.png')} style={{width: '70%', height: '80%'}}>
            <View style={styles.sliderContainer}>
                <VerticalSlider
                  value={1}
                  disabled={false}
                  min={0}
                  max={100}
                  // onChange={(value: number) => {
                  //   console.log("CHANGE", value);
                  // }}
                  onComplete={(value) => {
                    // Alert.alert(JSON.stringify(value))
                    this.setState({
                      sliderVal : value,
                    })
                  }}
                  width={70}
                  height={327}
                  step={1}
                  borderRadius={0}
                  minimumTrackTintColor='#1E88E5'
                  maximumTrackTintColor='transparent'
                  showBallIndicator={true}
                  ballIndicatorColor={"red"}
                  ballIndicatorTextColor={"green"}
                />
            </View>
      </ImageBackground>
      <View style={styles.value}>
        <Text style={{fontSize: 30}}>{this.state.sliderVal}</Text>
      </View>

      <View style={styles.submitButton}>
          <TouchableOpacity onPress={() => this.onSubmission()}>
              <Text style={styles.text}>Submit Report</Text>
          </TouchableOpacity>
      </View>

    </View>
        )
    }
};

const styles = StyleSheet.create({
    sliderContainer: {
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    container: {
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9E9E9E',
        flex: 1,
    },
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

    },
    value: {
      backgroundColor: 'red',


    }
});