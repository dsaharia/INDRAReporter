import React, { Component } from 'react';
import { Text, Alert, ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import VerticalSlider from 'rn-vertical-slider';

const url = 'https://indrareport.herokuapp.com/api/report/';

export default class FloodLevel extends Component {
    constructor(props) {
        super(props)
        const { lat, long, timestamp } = this.props.navigation.state.params
        this.state = {
            sliderVal: 0,
            lat: lat,
            long: long,
            timestamp: timestamp,
        }

    }
    onSubmission = () => {
        const data = {
            latitude: this.state.lat,
            longitude: this.state.long,
            timestamp: this.state.timestamp,
            reporttype: this.state.sliderVal,
        }
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
            .catch(error => console.log(error))
    }
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.headerContainer}>
                    <Text style = {styles.questionText}>Use the blue slider to submit Water Level</Text>
                </View>

      <ImageBackground source={require('./final.png')} style={styles.imageStyle}>
            <View style={styles.sliderContainer}>
                <VerticalSlider
                  value={0.5}
                  disabled={false}
                  min={0}
                  max={10}
                  // onChange={(value: number) => {
                  //   console.log("CHANGE", value);
                  // }}
                  onComplete={(value) => {
                    // Alert.alert(JSON.stringify(value))
                    this.setState({
                      sliderVal : value,
                    })
                  }}
                  width={63}
                  height={220}
                  step={1}
                  borderRadius={1}
                  minimumTrackTintColor='#42A5F5'
                  maximumTrackTintColor='transparent'
                  showBallIndicator={false}
                  ballIndicatorColor={"red"}
                  ballIndicatorTextColor={"green"}
                />
            </View>
      </ImageBackground>
      <View style={styles.value}>
        <Text style={{fontSize: 23}}>Water level: {this.state.sliderVal} meter</Text>
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
        position: 'absolute',
        left: '40%',
        bottom: '3%',
        // paddingTop: 140,
        // paddingBottom: 220,
        backgroundColor: 'transparent',
        borderWidth: 2
    },
    container: {
        // padding: 14,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#b3e5fc',
        flex: 1,
    },
    imageStyle: {
        position: 'absolute',
        width: '68%',
        height: '68%',
        left: '16%',
        bottom: '25%',
        // paddingRight: 50,
        // paddingBottom: 50,
        // paddingTop: 10,
        // borderWidth: 6,
        // left: 90
        // position: 'absolute',
        // bottom: 90
    },
    submitButton: {
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
      position: 'absolute',
      bottom: '12%',
      left: '25%',
      alignItems: 'center',
    },
    headerContainer: {
        paddingBottom: 15,
        paddingTop: 10,
    },
    questionText: {
        fontSize: 20,
        textAlign: 'center',
    },
});