import { Text } from "@react-pdf/renderer";
import { TitleFrameWork } from "./TitleFrameWork";

function MainTitle({ children, title, date: { start, end }, location }) {
  const main = <Text>{title}</Text>;
  const rightTop = (
    <Text>
      {start} &mdash; {end}
    </Text>
  );
  const rightBottom = location ? <Text>{location}</Text> : null;

  return (
    <TitleFrameWork main={main} rightTop={rightTop} rightBottom={rightBottom} />
  );
}

export default MainTitle;
