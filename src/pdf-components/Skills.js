import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { DottedLines } from ".";
import SectionHeader from "./SectionHeader";
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    minHeight: 40,
    fontFamily: "ebgRegular",
  },
  text: {
    padding: 15,
    fontSize: 12,
    textAlign: "center",
  },
  itemsContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  items: { flexDirection: "row", flexBasis: "50%", marginTop: 5 },
  itemsOdd: {
    paddingRight: 10,
  },
  itemsEven: {
    paddingLeft: 10,
  },
  skillName: {},
  skillLevel: {
    fontFamily: "ebgSemiBoldItalic",
  },
});

function SkillsItem({ skillItem: { name, level }, isOdd }) {
  const style = isOdd ? styles.itemsOdd : styles.itemsEven;
  return (
    <View style={[styles.items, style]}>
      <View>
        <Text style={styles.skillName}>{name}</Text>
      </View>
      <DottedLines />
      <View>
        <Text style={styles.skillLevel}>{level}</Text>
      </View>
    </View>
  );
}


function Skills({ skills, ...props }) {
  if (!Array.isArray(skills)) {
    return Object.values(skills).map((value) => {
      return (
        <View style={styles.container} {...props}>
          <SectionHeader>{value.title}</SectionHeader>
          <View style={styles.itemsContainer}>
            {value.list.map((skillItem, index) => (
              <SkillsItem
                skillItem={skillItem}
                isOdd={!((index + 1) % 2 === 0)}
                key={`${skillItem.name}${skillItem.experience}${index}`}
              />
            ))}
          </View>
        </View>
      );
    });
  }
  return (
    <View style={styles.container} {...props}>
      <SectionHeader>Skills</SectionHeader>
      <View style={styles.itemsContainer}>
        {skills.map((skillItem, index) => (
          <SkillsItem
            skillItem={skillItem}
            isOdd={!((index + 1) % 2 === 0)}
            key={`${skillItem.name}${skillItem.experience}${index}`}
          />
        ))}
      </View>
    </View>
  );
}
export default Skills;

