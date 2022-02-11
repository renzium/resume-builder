import { Document } from "@react-pdf/renderer";
import ResumePage from "./ResumePage";

function ResumeDocument({ pdfData }) {
  console.log(`Re rendering pdf component`);
  const { metaData } = pdfData;

  return (
    <Document {...metaData}>
      <ResumePage pdfData={pdfData} />
    </Document>
  );
}

export default ResumeDocument;
