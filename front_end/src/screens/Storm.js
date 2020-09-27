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
    desc_full:
      "Catastrophic - Extensive damage to doors and windows, complete building failures, massive evacuation.",
    desc: "Catastrophic",
    desc_id: "f1",
  },
  {
    desc_full:
      "Extreme - Failure of roofs, major erosion, evacuation near the sea-shore.",
    desc: "Extreme",
    desc_id: "f2",
  },
  {
    desc_full:
      "Extensive - Large trees blown down, some structural damage to buildings",
    desc: "Extensive",
    desc_id: "f3",
  },
  {
    desc_full: "Moderate - Small trees down, damage to temporary structures",
    desc: "Moderate",
    desc_id: "f4",
  },
  {
    desc_full: "Minor - Damage to trees and foliage, low-lying roads flooded",
    desc: "Minor",
    desc_id: "f5",
  },
];
const colors = ["#EC3E40", "#FF9B2B", "#F5D800", "#377FC7", "#01A46D"];

export default class Visibility extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.navigation.state.params)
  }
  onSelect = (desc, desc_id) => {
    this.props.navigation.state.params.selectReport("Storm", desc, desc_id);
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
              <Text style={styles.text}> {item.desc_full}</Text>
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
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    color: "black",
    textAlign: "left",
  },
  questionText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 25,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 25,
    paddingTop: 25,
  },
});
