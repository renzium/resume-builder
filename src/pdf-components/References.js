import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { TitleFrameWork } from "./TitleFrameWork";
import { If, KeyValueTitle, Layout } from ".";


const styles = StyleSheet.create({
  referenceItem: {marginTop: 10},
  referenceDetails: {
    marginTop: -5,
    paddingHorizontal: 25,
  },
});

function ReferenceItem({ referenceDetails }) {
  const { address, department, email, fullName, phone } = referenceDetails;
  const main = <Text>{fullName}</Text>;
  const rightTop = <Text>{phone}</Text>;
  const keyValueStyles = { marginTop: 5, marginBottom: 0 };
  return (
    <View style={styles.referenceItem}>
      <TitleFrameWork main={main} rightTop={rightTop} />
      <View style={styles.referenceDetails}>
        <If
          condition={email}
          render={
            <KeyValueTitle
              property="Email"
              value={email}
              style={keyValueStyles}
            />
          }
        />
        <If
          condition={address}
          render={
            <KeyValueTitle
              property="Address"
              value={address}
              style={keyValueStyles}
            />
          }
        />
        <If
          condition={department}
          render={
            <KeyValueTitle
              property="Department"
              value={department}
              style={keyValueStyles}
            />
          }
        />
      </View>
    </View>
  );
}

function References({ references }) {
  return (
    <Layout title="References">
      {references.map((referenceDetails, index) => (
        <ReferenceItem
          referenceDetails={referenceDetails}
          key={`${referenceDetails.title}${index}`}
        />
      ))}
    </Layout>
  );
}

export default References;
