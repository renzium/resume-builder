import { View } from "@react-pdf/renderer";

function If({ condition, children, render, defaultElement = <View></View> }) {
  const element = children || render;
  if (!element || !condition) {
    return null;
  }
  return <View>{element}</View>;
}

export default If;
