import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from "react-native";

const reports = [
  {
    key:
      "Catastrophic - Very severe and extensive damage to doors and windows, some complete building failures, massive evacuation.",
  },
  {
    key:
      "Extreme - Failure of roofs, major erosion, evacuation near the sea-shore.",
  },
  {
    key:
      "Extensive - Large trees blown down, some structural damage to buildings",
  },
  { key: "Moderate - Small trees down" },
  { key: "Minor - Damage to trees and foliage, low-lying roads flooded" },
];
const colors = ["#1a237e", "#283593", "#3f51b5", "#7986cb", "#9fa8da"];

export default class Visibility extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.navigation.state.params)
  }
  onSelect = (option) => {
    this.props.navigation.state.params.selectReport(option);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.questionText}> What are you seeing?</Text>
        </View>

        <FlatList
          data={reports}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: colors[index % colors.length] },
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
    height: 110,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    padding: 5,
    alignItems: "stretch",
    fontSize: 20,
    fontFamily: "Arial",
    color: "white",
    textAlign: "left",
  },
  questionText: {
    fontSize: 30,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 25,
    paddingTop: 25,
  },
});
