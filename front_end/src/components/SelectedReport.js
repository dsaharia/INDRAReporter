import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

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
    fontFamily: "fantasy",
    fontSize: 15,
    color: "white",
    paddingLeft: 2,
    textAlign: "left",
  },
  reportType: {
    backgroundColor: "#093F61",
    paddingTop: 13,
    paddingLeft: 8,
    paddingBottom: 13,
    paddingRight: 15,
    left: 11,
    bottom: 3,
    width: "59%",
    borderRadius: 5,
  },
  selectedReport: {
    justifyContent: "center",
    paddingLeft: 14,
  },
});
export default SelectedReport;
