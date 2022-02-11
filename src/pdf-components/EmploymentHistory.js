import React from "react";
import { View, } from "@react-pdf/renderer";
import MainTitle from './MainTitle';
import Layout from './Layout';
import {UnorderedList} from "./UnorderedList";


function EmploymentHistory({ employmentHistory: employment, ...props }) {
  return (
    <Layout title="Employment History" {...props}>
      {employment.map((employmentDetails, index) => (
        <EmploymentHistoryItem
          employmentDetails={employmentDetails}
          key={`${employmentDetails.title}${index}`}
        />
      ))}
    </Layout>
  );
}

function EmploymentHistoryItem({
  employmentDetails: { title, location, date, activities },
  ...props
}) {
  return (
    <View style={{ marginBottom: 10 }} wrap={false} {...props}>
      <MainTitle title={title} date={date} location={location} />
      <UnorderedList items={activities} style={{ marginTop: -12 }} />
    </View>
  );
}

export default EmploymentHistory;
