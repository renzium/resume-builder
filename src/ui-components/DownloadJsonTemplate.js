import React from "react";
import { Button } from "antd";

import { DownloadOutlined } from "@ant-design/icons";

import config from "../assets/data/config.json";
import { useMediaQueries } from "../hooks/use-media-queries";

function DownloadJsonTemplate() {
  const [jsonURL, setJsonUrl] = React.useState();
  const { isMinimumTabModalScreen } = useMediaQueries();

  React.useEffect(() => {
    const blob = new Blob([JSON.stringify(config, null, 2)], {
      type: "application/json",
    });
    setJsonUrl(window.URL.createObjectURL(blob));
  }, []);
  return (
    <>
      <Button
        type="ghost"
        onClick={() => {}}
        href={jsonURL}
        download={"ResumeTemplate.json"}
        block={!isMinimumTabModalScreen}
        size="large"
        className={`flex items-center`}
        icon={<DownloadOutlined className={`w-5 h-5 mr-4`} />}
      >
        Download JSON Template
      </Button>
    </>
  );
}

export default DownloadJsonTemplate;
