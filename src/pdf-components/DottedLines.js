import { View} from "@react-pdf/renderer";
function DottedLines() {
  return (
    <View
      style={{
        borderBottomStyle: "dashed",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        flexGrow: 1,
        marginHorizontal: 5,
        fontWeight: "light",
        alignSelf: "center",
      }}
    ></View>
  );
}

export default DottedLines
