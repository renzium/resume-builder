import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { fontSizeMap } from "./GlobalStyles";
import SectionHeader from "./SectionHeader";
import { SectionRule } from ".";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    minHeight: 40,
    fontFamily: "ebgRegular",
  },
  text: {
    padding: 10,
    fontWeight: 300,
    fontSize: fontSizeMap.bigMedium,
    textAlign: "center",
  },
});

function Profile({ profile, ...props }) {
  return (
    <View style={styles.container} {...props}>
      <SectionHeader>Profile</SectionHeader>
      <Text style={styles.text}>{profile}</Text>
      <SectionRule />
    </View>
  );
}

export default Profile;
