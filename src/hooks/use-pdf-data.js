import React from "react";
import defaultPDFData from "../assets/data/config.json";

export function usePDFData() {
  const [pdfData, updatePdfData] = React.useState(defaultPDFData);

  const setPDFData = (newData) => {
    updatePdfData(newData || defaultPDFData);
  };

  return { pdfData, setPDFData,updatePdfData };
}
