import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

const colors = [
  "#91cfe6",
  "#8abccf",
  "#73a2c6",
  "#5d8abd",
  "#4771b2",
  "#2e59a8",
  "#00429d",
];

const rainData = [
  { desc: "No Rain", desc_id: "a1" },
  { desc: "Light Rain (Drizzle)", desc_id: "a2"},
  { desc: "Heavy Rain", desc_id: "a3"},
  { desc: "Freezing Rain", desc_id: "a4"},
  { desc: "Freezing Drizzle", desc_id: "a5"},
  { desc: "Snow", desc_id: "a6"},
  { desc: "Mixed Rain and Snow", desc_id: "a7"},
];

export default class Rain extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.navigation.state.params)
  }
  onSelect = (desc, desc_id) => {
    console.log(desc, desc_id)
    this.props.navigation.state.params.selectReport("Rain", desc, desc_id);
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> What kind of rain?</Text>
        </View>
        <FlatList
          data={rainData}
          keyExtractor={(item, index) => item.desc_id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: colors[index % colors.length] },
              ]}
              onPress={() => this.onSelect(item.desc, item.desc_id)}
            >
              <Text style={styles.rainText}>{item.desc}</Text>
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
  rainText: {
    fontSize: 25,
    fontFamily: "Arial",
    color: "white",
  },
  headerText: {
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
