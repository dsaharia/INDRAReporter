import React, { Component } from "react";
import {
  Text,
  Alert,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import VerticalSlider from "rn-vertical-slider";

const url = "http://indrareport.herokuapp.com/api/add/";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class FloodLevel extends Component {
  constructor(props) {
    super(props);
    const {
      lat,
      long,
      category,
      description,
      description_id,
    } = this.props.navigation.state.params;

    this.state = {
      sliderVal: 0,
      lat: lat,
      long: long,
      category: category,
      description: description,
      description_id: description_id,
    };
  }
  onSubmission = () => {
    const data = {
      lat: this.state.lat,
      lon: this.state.long,
      category: this.state.category,
      description: this.state.description,
      description_id: this.state.description_id,
      obsval: this.state.sliderVal,
    };
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(Alert.alert(" Thanks for your citizen science report! "))
      // .then(response => response.json())
      // .then(result => console.log(result))
      .catch((error) => console.log(error));
    this.props.navigation.navigate("Indra");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.questionText}>
            Use to blue slider to submit Water Level relative to a 6ft/1.8m tall
            person.
          </Text>
        </View>

        <ImageBackground
          source={require("./final.png")}
          style={styles.imageStyle}
        >
          <View style={styles.sliderContainer}>
            <VerticalSlider
              value={0}
              disabled={false}
              min={0}
              max={3.6}
              onChange={(value: number) => {
                this.setState({
                  sliderVal: value.toFixed(2),
                });
              }}
              onComplete={(value) => {
                this.setState({
                  sliderVal: value.toFixed(2),
                });
              }}
              width={200}
              height={370}
              step={0.1}
              borderRadius={1}
              minimumTrackTintColor="#42A5F5"
              maximumTrackTintColor="transparent"
              showBallIndicator={false}
              ballIndicatorColor={"red"}
              ballIndicatorTextColor={"green"}
            />
          </View>
        </ImageBackground>
        <View style={styles.value}>
          <Text
            style={{
              fontSize: 20,
              color: "black",
              fontFamily: "Montserrat-Medium",
            }}
          >
            Water level: {this.state.sliderVal} meters/
            {(this.state.sliderVal * 3.281).toFixed(2)} foot
          </Text>
        </View>

        <View style={styles.submitButton}>
          <TouchableOpacity onPress={() => this.onSubmission()}>
            <Text style={styles.text}>Submit Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // sliderContainer: {
  //   // flex: 1,
  //   position: "absolute",
  //   left: "1%",
  //   bottom: "3%",
  //   // paddingTop: 140,
  //   // paddingBottom: 220,
  //   width: "100%",
  //   backgroundColor: "transparent",
  //   borderWidth: 10,
  // },
  container: {
    backgroundColor: "#b3e5fc",
    flex: 1,
  },
  imageStyle: {
    position: "absolute",
    width: "65%",
    height: "70%",
    left: "16%",
    bottom: "21%",
    // paddingRight: 50,
    // paddingBottom: 50,
    // paddingTop: 10,
    // borderWidth: 6,
    // left: 90
    // position: 'absolute',
    // bottom: 90
  },
  submitButton: {
    position: "absolute",
    bottom: 10,
    borderRadius: 13,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#093F61",
    left: 11,
    right: 11,
  },
  text: {
    justifyContent: "center",
    fontSize: 20,
    color: "white",
    fontFamily: "Montserrat-Bold",
  },
  value: {
    position: "absolute",
    // bottom: "14%",
    bottom: 80,
    left: 15,
  },
  headerContainer: {
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 15,
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    color: "black",
  },
});
