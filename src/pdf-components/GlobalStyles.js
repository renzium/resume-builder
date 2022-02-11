import { Font, StyleSheet } from "@react-pdf/renderer";
import ebgItalic from "../assets/fonts/EB Garamond Italic.ttf";
import ebgRegular from "../assets/fonts/EB Garamond Regular.ttf";
import ebgSemiBold from "../assets/fonts/EB Garamond SemiBold.ttf";
import ebgSemiBoldItalic from "../assets/fonts/EB Garamond SemiBold Italic.ttf";
import titleImage from "../assets/images/svg.png";

export const fontSizeMap = {
  largest: 18.5,
  large: 11.9,
  medium: 10.9,
  bigMedium: 10, //profile section
  smallMedium: 9.9,
  normal: 9.6, // key-value,
  small: 9,
  smallest: 8, // location
};

const fontFamilyMap = {
  ebgItalic,
  ebgRegular,
  ebgSemiBold,
  ebgSemiBoldItalic,
};

export const imagesMap = {
  title: titleImage,
};
export const fontFamilyNames = Object.keys(fontFamilyMap).reduce(
  (acc, key) => ({ ...acc, [key]: key }),
  {}
);
export function registerFonts() {
  for (const [family, src] of Object.entries(fontFamilyMap)) {
    if (Array.isArray(src)) {
      const [source, fontWeight, fontStyle] = src;
      Font.register({
        family,
        src: source,
        fontWeight: fontWeight || "normal",
        fontStyle: fontStyle || "normal",
      });
    } else {
      Font.register({ family, src });
    }
  }
}

// Register Fonts
registerFonts();

const globalStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 40,
    paddingVertical: 30,
    fontSize: fontSizeMap.bigMedium,
    fontWeight: 100,
    lineHeight: 1.4,
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    position: "absolute",
    fontSize: 10,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    fontFamily: "ebgItalic",
  },
});

export default globalStyles;
