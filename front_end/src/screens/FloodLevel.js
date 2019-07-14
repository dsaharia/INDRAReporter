import React from 'react';
import { Alert, ImageBackground, StyleSheet, View } from 'react-native';
import VerticalSlider from 'rn-vertical-slider';
import SubmitButton from '../components/SubmitButton';

const FloodLevel = () => (
  <View style={styles.container}>
      <ImageBackground source={require('./man.png')} style={{width: '60%', height: '80%'}}>
            <View style={styles.container}>
                <VerticalSlider
                  value={1}
                  disabled={false}
                  min={0}
                  max={100}
                  // onChange={(value: number) => {
                  //   console.log("CHANGE", value);
                  // }}
                  onComplete={(value) => {
                    Alert.alert(JSON.stringify(value))
                  }}
                  width={70}
                  height={260}
                  step={1}
                  borderRadius={5}
                  minimumTrackTintColor='#00FFFFFF'
                  maximumTrackTintColor='transparent'
                  showBallIndicator={true}
                  ballIndicatorColor={"red"}
                  ballIndicatorTextColor={"green"}
                />
            </View>
      </ImageBackground>
      <SubmitButton />
    </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default FloodLevel;
