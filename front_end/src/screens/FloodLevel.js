import React from 'react';
import { StyleSheet, View } from 'react-native';
import VerticalSlider from 'rn-vertical-slider';


const FloodLevel = () => (
        <View style={styles.container}>
            <VerticalSlider
              value={1}
              disabled={false}
              min={0}
              max={100}
              onChange={(value: number) => {
                console.log("CHANGE", value);
              }}
              onComplete={(value: number) => {
                console.log("COMPLETE", value);
              }}
              width={50}
              height={250}
              step={1}
              borderRadius={5}
              minimumTrackTintColor={"gray"}
              maximumTrackTintColor={"tomato"}
              showBallIndicator={true}
              ballIndicatorColor={"gray"}
              ballIndicatorTextColor={"white"}
            />
        </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloodLevel;
