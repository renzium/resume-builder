import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { DottedLines } from ".";
import { fontSizeMap, imagesMap } from "./GlobalStyles";
import If from "./If";

const mainTitleStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    flexDirection: "row",
    fontSize: fontSizeMap.medium,
    fontFamily: "ebgSemiBold",
  },
  titleImage: {
    width: 11,
    display: "block",
    objectFit: "cover",
    marginRight: 5,
    paddingTop: 2,
  },

  dateLocation: {
    flexDirection: "column",
  },
  date: {},
  location: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export function TitleFrameWork({ main, rightTop, rightBottom }) {
  return (
    <View style={mainTitleStyles.container}>
      <View style={mainTitleStyles.title}>
        <View style={mainTitleStyles.titleImage}>
          <Image src={imagesMap.title} allowDangerousPaths />
        </View>
        {main}
      </View>
      <DottedLines />
      <View style={mainTitleStyles.dateLocation}>
        <View style={mainTitleStyles.date}>{rightTop}</View>
        <If
          condition={rightBottom}
          render={<View style={mainTitleStyles.location}>{rightBottom}</View>}
          defaultElement={
            <View style={mainTitleStyles.location}>
              <Text>&nbsp;</Text>
            </View>
          }
        />
      </View>
    </View>
  );
}
