import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from "react-native";

const colors = ["#29b6f6", "#039be5"];

const reports = [
  { key: "Light Fog" },
  { key: "Dense Fog" },
  { key: "Smog/Air Pollution" },
  { key: "Blowing Dust" },
  { key: "Blowing Snow" },
];
export default class Visibility extends Component {
  constructor(props) {
    super(props);
  }
  onSelect = (option) => {
    this.props.navigation.state.params.selectReport(option);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.questionText}> What kind of report?</Text>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e88e5",
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    fontFamily: "Arial",
    color: "white",
  },
  questionText: {
    fontSize: 30,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingBottom: 25,
    paddingTop: 30,
  },
});
