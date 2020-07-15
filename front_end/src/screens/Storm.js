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
      "Catastrophic - Extensive damage to doors and windows, complete building failures, massive evacuation.",
  },
  {
    key:
      "Extreme - Failure of roofs, major erosion, evacuation near the sea-shore.",
  },
  {
    key:
      "Extensive - Large trees blown down, some structural damage to buildings",
  },
  { key: "Moderate - Small trees down, damage to temporary structures" },
  { key: "Minor - Damage to trees and foliage, low-lying roads flooded" },
];
const colors = ["#EC3E40", "#FF9B2B", "#F5D800", "#377FC7", "#01A46D"];

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
    height: 98,
  },
  text: {
    padding: 5,
    alignItems: "stretch",
    fontSize: 22,
    fontFamily: "Arial",
    color: "black",
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
