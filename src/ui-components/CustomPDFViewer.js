import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import styled from "styled-components";
import React from "react";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 95vw;
  overflow: hidden;
  && canvas {
    max-width: 100%;
    height: auto !important;
  }
`;

const StyledCustomPDFPage = styled(Page)``;

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

function CustomPDFViewer({
  setMaxNumberOfPage,
  pageNumber,
  pdfInstance,
  loadingPdf,
  setLoadingPdf,
}) {
  function onDocumentLoadSuccess({ numPages }) {
    setMaxNumberOfPage(numPages);
    setLoadingPdf(false);
    toast.success("Your Resume has been generated");
  }

  const documentViewerLoader = (
    <LoaderContainer>
      <SyncOutlined spin className={`text-3xl`} />
    </LoaderContainer>
  );

  if (pdfInstance.loading) {
    return documentViewerLoader;
  }

  return (
    <StyledContainer>
      <Document
        file={pdfInstance.blob}
        loading={documentViewerLoader}
        noData={documentViewerLoader}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode="canvas"
      >
        <StyledCustomPDFPage pageNumber={pageNumber} />
      </Document>
    </StyledContainer>
  );
}

export default styled(CustomPDFViewer)``;
