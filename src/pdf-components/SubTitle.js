import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { fontSizeMap } from "./GlobalStyles";

const subtitleStyles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },

  text: {
    fontSize: fontSizeMap.small,
    fontFamily: "ebgItalic",
  },
});

export default function SubTitle({ text, styles }) {
  return (
    <View style={[subtitleStyles.container, styles]}>
      <Text style={subtitleStyles.text}>{text}</Text>
    </View>
  );
}
