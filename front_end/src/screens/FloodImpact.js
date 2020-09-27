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
    desc_full:
      "SEVERE - Large scale evacuation of people. Permanent houses and vehicles swept away",
    desc: "SEVERE",
    desc_id: "b1",
  },
  {
    desc_full:
      "MAJOR -  Affecting communities. Flooded roads, stranded vehicles, and inundated houses.",
    desc: "MAJOR",
    desc_id: "b2",
  },
  {
    desc_full:
      "MODERATE - Flooded roads. Disruption of travel to flooding sites",
    desc: "MODERATE",
    desc_id: "b3",
  },

  {
    desc_full:
      "MINOR - Flooding in low-lying areas, some inconvenience to the public.",
    desc: "MINOR",
    desc_id: "b4",
  },
  { desc_full: "NONE - No flooding observed", desc: "NONE", desc_id: "b5" },
];

const colors = ["#EC3E40", "#FF9B2B", "#F5D800", "#377FC7", "#01A46D"];

export default class FloodImpact extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.navigation.state.params)
  }
  onSelect = (desc, desc_id) => {
    this.props.navigation.navigate("FloodLevel", {
      lat: this.props.navigation.state.params.lat,
      long: this.props.navigation.state.params.long,
      category: "Flood",
      description: desc,
      description_id: desc_id,
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
          keyExtractor={(item, index) => item.desc_id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: colors[index % colors.length],
                },
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
    height: 94,
  },
  text: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    color: "black",
    textAlign: "left",
    padding: 5,
  },
  questionText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
    paddingTop: 30,
  },
});
