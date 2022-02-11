import { View } from "@react-pdf/renderer";

function SectionRule() {
  return (
    <View
      style={{
        height: 3,
        borderTopWidth: 1.2,
        borderColor: "#112131",
        borderBottomWidth: 0.4,
        borderStyle: "solid",
      }}
    ></View>
  );
}

export default SectionRule
