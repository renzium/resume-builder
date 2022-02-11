import { Text } from "@react-pdf/renderer";

export default function Footer({ style }) {
  return (
    <Text
      style={style}
      render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      fixed
    />
  );
}
