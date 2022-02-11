import React from "react";
import { ToolbarButton } from "./Toolbar";

import { useAppContext } from "../context/app-context";
import { DownloadOutlined } from "@ant-design/icons";

function DownloadResume() {
  const { pdfInstance, pdfData } = useAppContext();
  const filename = `${pdfData.data.header.fullName}.pdf`;
  return (
    <>
      <ToolbarButton as="a" href={pdfInstance.url} download={filename}>
        <DownloadOutlined />
      </ToolbarButton>
    </>
  );
}

export default DownloadResume;
