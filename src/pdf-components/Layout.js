import { View, StyleSheet } from "@react-pdf/renderer";
import SectionHeader from "./SectionHeader";

const layoutStyles = StyleSheet.create({
  container: {
    fontFamily: "ebgRegular",
  },
  itemsContainer: {
    paddingVertical: 10,
  },
});
function Layout({ title, children, itemContainerStyles, ...props }) {
  return (
    <View style={[layoutStyles.container]} {...props}>
      <SectionHeader>{title}</SectionHeader>
      <View style={[layoutStyles.itemsContainer, itemContainerStyles]}>
        {children}
      </View>
    </View>
  );
}

export default Layout;
