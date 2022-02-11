import React from "react";
import ResumeDocument from "../pdf-components/ResumeDocument";
import { pdf } from "@react-pdf/renderer";

export function usePDFBlob() {
  const [loading, setLoading] = React.useState(false);
  const [pdfDocumentURL, setPDFDocumentUrl] = React.useState();
  const [pdfBlob, setPDFBlob] = React.useState(null);

  React.useEffect(() => {
    const generateBlob = async () => {
      setLoading(true);
      const blob = await pdf(<ResumeDocument />).toBlob();
      setLoading(false);
      setPDFBlob(blob);
      setPDFDocumentUrl(window.URL.createObjectURL(blob));
    };
    generateBlob();
  }, []);

  return { loading, pdfDocumentURL, pdfBlob };
}
