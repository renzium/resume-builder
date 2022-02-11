import React from "react";
import { View } from "@react-pdf/renderer";
import { Layout } from ".";
import { Title } from "./Title";

function Awards({ awards: { title, data }, ...props }) {
  return (
    <Layout title={title || "Awards and Certification"} {...props}>
      <View style={{ marginBottom: 10 }} wrap={false} {...props}>
        {data.map(({ certificate, date }) => (
          <Title title={certificate} date={date} />
        ))}
      </View>
    </Layout>
  );
}

export default Awards;
