import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from "react-native";

const reports = [
  { desc: "Landslide", desc_id: "c1" },
  { desc: "Mudslide", desc_id: "c2" },
  { desc: "Debris flow", desc_id: "c3" },
  { desc: "Rock fall", desc_id: "c4" },
  { desc: "Translational slide", desc_id: "c5" },
  { desc: "Rotational slide", desc_id: "c6" },
  { desc: "Complex", desc_id: "c7" },
  { desc: "Topple", desc_id: "c8" },
  { desc: "Riverbank collapse", desc_id: "c9" },
  { desc: "Lahar", desc_id: "c10" },
  { desc: "Earth flow", desc_id: "c11" },
  { desc: "Snow avalanche", desc_id: "c12" },
  { desc: "Creep", desc_id: "c13" },
];
const colors = ["#29b6f6", "#039be5"];

export default class Landslide extends Component {
  constructor(props) {
    super(props);
  }
  onSelect = (desc, desc_id) => {
    this.props.navigation.state.params.selectReport("Landslide", desc, desc_id);
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
    paddingBottom: 30,
    paddingTop: 30,
  },
});
