import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import MainTitle from "./MainTitle";
import SubTitle from "./SubTitle";
import KeyValueTitle from "./KeyValueTitle";
import MainTitleBulletPoints from "./MainTitleBulletPoints";
import Layout from "./Layout";
import If from "./If";

const styles = StyleSheet.create({
  educationItem: {
    marginBottom: 10,
  },
});

function EducationItem({
  educationDetails: {
    title,
    subtitle,
    date,
    location,
    awards,
    volunteeringOrOrganization,
    subjectMajor,
    subjectMinor,
    activities,
    thesis,
    relevantSubject,
  },
  ...props
}) {
  return (
    <View style={styles.educationItem} wrap={false} {...props}>
      <MainTitle title={title} date={date} location={location} />
      <If
        condition={subtitle}
        render={<SubTitle text={subtitle} styles={{ marginTop: -2 }} />}
      />
      <If
        condition={thesis}
        render={<KeyValueTitle property="Thesis" value={thesis} />}
      />
      <If
        condition={subjectMajor}
        render={<KeyValueTitle property="Subject Major" value={subjectMajor} />}
      />
      <If
        condition={subjectMinor}
        render={<KeyValueTitle property="Subject Minor" value={subjectMinor} />}
      />
      <If
        condition={activities}
        render={<MainTitleBulletPoints title="Activities" items={activities} />}
      />
      <If
        condition={awards}
        render={<MainTitleBulletPoints title="Awards" items={awards} />}
      />
      <If
        condition={volunteeringOrOrganization}
        render={
          <MainTitleBulletPoints
            title="Volunteering/Organizations"
            items={volunteeringOrOrganization}
          />
        }
      />
      <If
        condition={relevantSubject}
        render={
          <MainTitleBulletPoints
            title="Volunteering/Organizations"
            items={relevantSubject}
          />
        }
      />
    </View>
  );
}

function Education({ education, ...props }) {
  return (
    <Layout title="Education" {...props}>
      {education.map((educationDetails, index) => (
        <EducationItem
          educationDetails={educationDetails}
          key={`${educationDetails.title}${index}`}
        />
      ))}
    </Layout>
  );
}

export default Education;
