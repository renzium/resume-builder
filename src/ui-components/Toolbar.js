import React from "react";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import FileUploader from "./FileUploader";
import { useAppContext } from "../context/app-context";
import DownloadResume from "./DownloadResume";

const ToolbarContainer = styled.div`
  display: flex;
  height: 3.5rem;
  justify-content: space-around;
  align-items: center;
  width: max-content;
  margin: 0 auto;
  position: fixed;
  bottom: 1rem;
`;

export const ToolbarButton = styled(Button)`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  background: #fff;
  color: #222;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow ease-in 0.5s;

  &:hover {
    background: #fafafa;
    box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.3);
  }

  & + & {
    margin-left: 1rem;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

function Toolbar() {
  const { nextPdfPage, previousPdfPage } = useAppContext();
  const handlePreviousPage = (e) => previousPdfPage();
  const handleNextPage = (e) => nextPdfPage();
  return (
    <ToolbarContainer>
      <FileUploader />
      <ToolbarButton onClick={handlePreviousPage}>
        <LeftOutlined />
      </ToolbarButton>
      <ToolbarButton onClick={handleNextPage}>
        <RightOutlined />
      </ToolbarButton>
      <DownloadResume />
    </ToolbarContainer>
  );
}

export default styled(Toolbar)``;
