import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const SelectedReport = ({ report }) => (
  <View style={styles.container}>
    <View style={styles.selectedReport}>
      <Text style={styles.selectedReportText}>Selected Report: </Text>
    </View>
    <View style={styles.reportType}>
      <Text style={styles.reportText}>
        {" "}
        {report.category} - {report.desc}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  selectedReportText: {
    // fontFamily: "cursive",
    fontFamily: "fantasy",
    fontSize: 17,
    color: "#12355B",
  },
  reportText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
    color: "white",
    // paddingLeft: 2,
    textAlign: "left",
  },
  reportType: {
    backgroundColor: "#093F61",
    paddingTop: 5,
    paddingLeft: 8,
    paddingBottom: 5,
    left: 11,
    bottom: 3,
    width: windowWidth - 170,
    borderRadius: 5,
  },
  selectedReport: {
    justifyContent: "center",
    paddingLeft: 14,
  },
});
export default SelectedReport;
