import { Text, View, StyleSheet } from "@react-pdf/renderer";


const listStyles = StyleSheet.create({
  list: {
    paddingTop: 6,
  },
  listItem: {
    paddingHorizontal: 10,
    width: "80%",
    flexDirection: "row",
    paddingTop: 5,
  },
});

export function UnorderedListItem({ children }) {
  return (
    <View style={listStyles.listItem}>
      <View>
        <Text style={listStyles.listItemText}>&#8226; &nbsp; &nbsp;</Text>
      </View>
      <View>
        <Text>{children}</Text>
      </View>
    </View>
  );
}

export function UnorderedListContainer({ children, depth, style }) {
  return <View style={[listStyles.list, style]}>{children}</View>;
}

export function UnorderedList({ items, style }) {
  return (
    <UnorderedListContainer style={style}>
      {items.map((item, index) => (
        <UnorderedListItem key={`${item}-${index}`}>{item}</UnorderedListItem>
      ))}
    </UnorderedListContainer>
  );
}