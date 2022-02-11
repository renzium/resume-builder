import React from 'react'
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { fontSizeMap } from "./GlobalStyles";


const sectionHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2,
    paddingBottom: 4,
  },
  text: {
    fontSize: fontSizeMap.large,
    fontFamily: "ebgSemiBold",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "black",
  },
  textWrapper: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    paddingBottom: 0.5,
    justifyContent: "center",
  },
});

function SectionHeader({ children }) {
  return (
    <View style={sectionHeaderStyles.container}>
      <View style={sectionHeaderStyles.textWrapper}>
        <Text style={sectionHeaderStyles.text}>{children}</Text>
      </View>
    </View>
  );
}

export default SectionHeader
