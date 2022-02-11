import React from "react";
import { Document } from "@react-pdf/renderer";
import Page from "./PDFPage";

function Resume({ metaData, data, settings }) {
  return (
    <Document {...metaData}>
      <Page config={data} settings={settings} />
    </Document>
  );
}
export default Resume;
