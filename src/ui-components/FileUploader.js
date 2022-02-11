import React from "react";
import styled from "styled-components";
import { Button, Modal } from "antd";
import { ToolbarButton } from "./Toolbar";
import { Form, Upload } from "antd";
import { SyncOutlined, UploadOutlined, SaveOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";


import { useAppContext } from "../context/app-context";
import { useMediaQueries } from "../hooks/use-media-queries";
import DownloadJsonTemplate from "./DownloadJsonTemplate";

const StyledFileUploaderForm = styled.div`
  padding: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
  background: inherit;
  background-color: transparent;
`;

const StyledUploadIcon = styled(UploadOutlined)`
  width: 3.5rem;
  height: 3.5rem;
`;

function FileUploader() {
  const [visible, setVisible] = React.useState(false);
  const {
    setValidatedJsonFileContent,
    pdfUpdate,
    setPDFData,
    setLoadingPdf,
    loadingPdf,
  } = useAppContext();
  const { isMinimumTabModalScreen } = useMediaQueries();

  const handleOpenModal = () => setVisible(true);
  const normFile = (e) => {
    return e && e.fileList;
  };
  const handleRemoveFile = () => {
    setPDFData();
  };

  let fileReader = new FileReader();
  fileReader.onloadend = handleFileLoaded;

  function handleFileLoaded(e) {
    if (e.target.readyState === 2) {
      // when the file request is complete
      const textualFileContent = e.target.result;
      try {
        const jsonFileContent = JSON.parse(textualFileContent);
        jsonFileContent["nonce"] = Date.now();
        // validate file content using Yup.

        // set validated file content to state.
        setValidatedJsonFileContent(jsonFileContent);
        setPDFData(jsonFileContent);
      } catch (error) {
        // clear the uploaded file content
        // send toast error message.

        toast.error(`error occurred`);
      }
    }
  }

  const beforeUpload = (file) => {
    if (file) {
      fileReader.readAsText(file);
    }
    return false;
  };

  function handleSaveResume(e) {
    e.preventDefault();
    setLoadingPdf(true);
    pdfUpdate();
  }

  return (
    <>
      <ToolbarButton onClick={handleOpenModal}>
        <UploadOutlined />
      </ToolbarButton>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
        mask={false}
      >
        <StyledFileUploaderForm>
          <div className={`space-y-2`}>
            <Form>
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger
                  name="CV File Template"
                  maxCount={1}
                  beforeUpload={beforeUpload}
                  onRemove={handleRemoveFile}
                >
                  <p className="ant-upload-drag-icon">
                    <StyledUploadIcon />
                  </p>
                  <p className="ant-upload-text text-sm px-3">
                    Click or drag the downloaded updated resume template or your
                    custom resume template to this area to upload.
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form>

            <div
              className={`space-y-2 ssm:flex ssm:space-y-0 ssm:justify-between`}
            >
              <DownloadJsonTemplate />
              <Button
                type="ghost"
                onClick={handleSaveResume}
                block={!isMinimumTabModalScreen}
                size="large"
                className={`flex items-center`}
                icon={
                  false ? (
                    <SyncOutlined spin className={`w-5 h-5 mr-4`} />
                  ) : (
                    <SaveOutlined className={`w-5 h-5 mr-4`} />
                  )
                }
              >
                Save Resume
              </Button>
            </div>
          </div>
        </StyledFileUploaderForm>
      </Modal>
    </>
  );
}

export default FileUploader;
