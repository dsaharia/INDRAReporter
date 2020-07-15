import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

const reports = [
  {
    key:
      "SEVERE - Large scale evacuation of people. Permanent houses and vehicles swept away",
  },
  {
    key:
      "MAJOR -  Affecting communities. Flooded roads, stranded vehicles, and inundated houses.",
  },
  { key: "MODERATE - Flooded roads. Disruption of travel to flooding sites" },

  {
    key:
      "MINOR - Flooding in low-lying areas, some inconvenience to the public.",
  },
  { key: "NONE - No flooding observed" },
];

const colors = ["#EC3E40", "#FF9B2B", "#F5D800", "#377FC7", "#01A46D"];

export default class FloodImpact extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.navigation.state.params)
  }
  onSelect = (option) => {
    this.props.navigation.navigate("FloodLevel", {
      lat: this.props.navigation.state.params.lat,
      long: this.props.navigation.state.params.long,
      timestamp: this.props.navigation.state.params.timestamp,
      floodOption: option,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.questionText}> What are you experiencing?</Text>
        </View>

        <FlatList
          data={reports}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: colors[index % colors.length],
                },
              ]}
              onPress={() => this.onSelect(item.key)}
            >
              <Text style={styles.text}> {item.key}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b3e5fc",
    paddingLeft: 15,
    paddingRight: 15,
  },
  button: {
    alignItems: "flex-start",
    justifyContent: "center",
    height: 94,
  },
  text: {
    fontSize: 22,
    fontFamily: "Arial",
    color: "black",
    textAlign: "left",
    padding: 5,
  },
  questionText: {
    fontSize: 25,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    paddingTop: 30,
  },
});
