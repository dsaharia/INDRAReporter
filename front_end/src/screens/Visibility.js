import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from "react-native";

// const colors = ["#29b6f6", "#039be5"];
const colors = ["#0AA4A2", "#27D0D7"];

const reports = [
  { desc: "Light Fog", desc_id: "d1" },
  { desc: "Dense Fog", desc_id: "d2" },
  { desc: "Smog/Air Pollution", desc_id: "d3" },
  { desc: "Blowing Dust", desc_id: "d4" },
  { desc: "Blowing Snow", desc_id: "d5" },
];
export default class Visibility extends Component {
  constructor(props) {
    super(props);
  }
  onSelect = (desc, desc_id) => {
    this.props.navigation.state.params.selectReport(
      "Visibility",
      desc,
      desc_id
    );
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
          keyExtractor={(item, index) => item.desc_id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: colors[index % colors.length] },
              ]}
              onPress={() => this.onSelect(item.desc, item.desc_id)}
            >
              <Text style={styles.text}> {item.desc}</Text>
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
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 23,
    fontFamily: "Montserrat-Medium",
    color: "white",
  },
  questionText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 25,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingBottom: 25,
    paddingTop: 25,
  },
});
