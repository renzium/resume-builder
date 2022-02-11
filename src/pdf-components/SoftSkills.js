import React from "react";
import { View } from "@react-pdf/renderer";
import { Layout } from ".";
import { UnorderedList } from "./UnorderedList";

function SoftSkills({ softSkills, ...props }) {
  console.log("From soft skills", softSkills);
  return (
    <Layout title="Soft Skills" {...props}>
      <View style={{ marginBottom: 10 }} wrap={false} {...props}>
        <UnorderedList items={softSkills} style={{ marginTop: -12 }} />
      </View>
    </Layout>
  );
}
export default SoftSkills;
