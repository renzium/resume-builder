import { Text } from "@react-pdf/renderer";
import { TitleFrameWork } from "./TitleFrameWork";


export function Title({ children, title, date }) {
  const main = <Text>{title}</Text>;
  const rightTop = <Text>{date}</Text>;
  return <TitleFrameWork main={main} rightTop={rightTop} />;
}
