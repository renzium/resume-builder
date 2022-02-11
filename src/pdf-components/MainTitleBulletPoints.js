import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { UnorderedList } from "./UnorderedList";

const mainTitleBulletPointsStyles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontFamily: "ebgSemiBold",
  },
  list: {},
});

function MainTitleBulletPoints({ title, items }) {
  return (
    <View style={mainTitleBulletPointsStyles.container} wrap={false}>
      <View style={mainTitleBulletPointsStyles.title}>
        <Text>{title}:</Text>
      </View>
      <UnorderedList items={items} />
    </View>
  );
}

export default MainTitleBulletPoints;
