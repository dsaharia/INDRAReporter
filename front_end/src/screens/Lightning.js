import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
} from "react-native";

const reports = [
  { desc: "Cloud-to-Ground", desc_id: "G1" },
  { desc: "Cloud-to-Cloud", desc_id: "G2" },
  { desc: "Cloud-to-Air", desc_id: "G3" },
  { desc: "Spider", desc_id: "G4" },
];
const colors = ["#392A3D", "#63375B", "#A66384", "#CA8AA5"];

export default class Visibility extends Component {
  constructor(props) {
    super(props);
  }
  onSelect = (desc, desc_id) => {
    this.props.navigation.state.params.selectReport("Lightning", desc, desc_id);
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
    fontSize: 21,
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
