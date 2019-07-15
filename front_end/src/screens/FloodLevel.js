import React, { Component } from 'react';
import { Text, Alert, ImageBackground, StyleSheet, View } from 'react-native';
import VerticalSlider from 'rn-vertical-slider';
import SubmitButton from '../components/SubmitButton';

let val;
class FloodLevel extends Component {
  constructor(){
    super()
    this.state = {
      sliderVal : null,
    }
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
      <View style={{backgroundColor: 'red'}}>
        <Text style={{fontSize: 30}}>{this.state.sliderVal}</Text>
      </View>
      <SubmitButton />
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
});

export default FloodLevel;