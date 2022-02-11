import { Page } from "@react-pdf/renderer";
import { Footer } from ".";
import globalStyles from "./GlobalStyles";
import Education from "./Education";
import EmploymentHistory from "./EmploymentHistory";
import Profile from "./Profile";
import References from "./References";
import Skills from "./Skills";
import Languages from "./Languages";
import Header from "./Header";
import Awards from "./Awards";
import SoftSkills from "./SoftSkills";
import MySection from "./MySection"

function ResumePage({ pdfData }) {
  const { sections, data, settings } = pdfData;

  const sortSectionsByOrder = (section, otherSection) => {
    return section.order - otherSection.order;
  };

  const componentMap = {
    header: Header,
    profile: Profile,
    education: Education,
    employmentHistory: EmploymentHistory,
    skills: Skills,
    references: References,
    languages: Languages,
    awards: Awards,
    softSkills: SoftSkills,
    mySection: MySection
  };


  const renderSectionFromConfig = (options, index) => {
    const { name, wrap, break: breakValue } = options;
    const Component = componentMap[name];
    const sectionData = data[name] ? data[name] : null;
    if (Component && sectionData) {
      const props = { [name]: sectionData, break: breakValue, wrap };
      return <Component {...props} key={`${name}{index}`} />;
    }
    return;
  };
  const orderedSectionElement = sections
    .sort(sortSectionsByOrder)
    .map(renderSectionFromConfig);

  return (
    <Page size={settings.paperType} style={globalStyles.page}>
      {orderedSectionElement}
      <Footer style={globalStyles.footer} />
    </Page>
  );
}

export default ResumePage;
