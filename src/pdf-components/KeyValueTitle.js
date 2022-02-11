import { Text, View } from "@react-pdf/renderer";

function KeyValueTitle({ property, value, style }) {
  return (
    <View
      style={[{ marginBottom: 5, marginTop: 5, flexDirection: "row" }, style]}
    >
      <Text style={{ fontFamily: "ebgSemiBold" }}>{property}:</Text>
      <Text>&nbsp; &nbsp;{value}</Text>
    </View>
  );
}


export default KeyValueTitle;