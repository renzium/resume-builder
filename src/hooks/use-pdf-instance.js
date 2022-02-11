import { usePDF } from "@react-pdf/renderer";
import ResumeDocument from "../pdf-components/ResumeDocument";
import { usePDFData } from "./use-pdf-data";

/**
 * Function that returns a React-PDF Instance populated with uploaded pdf data or default pdf data.
 * @returns PDFInstance
 */
export function usePdfInstance() {
  const { pdfData, setPDFData } = usePDFData();

  console.log(`PdfData`, pdfData.data.header.fullName);
  console.log(`PdfData`, pdfData.data.mySection);
  const [pdfInstance, pdfUpdate] = usePDF({
    document: <ResumeDocument pdfData={pdfData} />,
  });

  return { pdfInstance, pdfUpdate, setPDFData, pdfData };
}
