import React from "react";
import { Link, Text, View, StyleSheet } from "@react-pdf/renderer";
import { fontSizeMap } from "./GlobalStyles";
import { If, SectionRule } from ".";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  name: {
    fontSize: fontSizeMap.largest,
    letterSpacing: 2,
    fontFamily: "ebgSemiBold",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 1.2,
    marginBottom: 3,
  },
  subtitle: {
    fontSize: fontSizeMap.large,
    textAlign: "center",
    fontFamily: "ebgSemiBold",
    marginBottom: 5,
  },
  address: {
    fontSize: fontSizeMap.smallMedium,
    textAlign: "center",
    fontFamily: "ebgRegular",
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "ebgSemiBold",
    fontSize: fontSizeMap.medium,
    paddingTop: 10,
    paddingBottom: 5,
  },
  link: {
    color: "black",
  },
});

function formatLink(link = "") {
  const replacement = new RegExp("http(s)*://(wwww.)*");
  const formatted = link.replace(replacement, "");
  return formatted;
}

function Header({
  header: { fullName, title, address, email, linkedIn, phone, github, website },
  ...props
}) {
  return (
    <View style={styles.container} {...props}>
      <View>
        <Text style={styles.name}>{fullName}</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>{title}</Text>
      </View>
      <Text style={styles.address}>{address}</Text>

      <View style={styles.contactContainer}>
        <If
          condition={linkedIn}
          render={
            <Text>
              <Link src={linkedIn} style={styles.link}>
                {formatLink(linkedIn)}
              </Link>
            </Text>
          }
        />
        <If
          condition={website}
          render={
            <Text>
              <Link style={styles.link} src={website}>
                {formatLink(website)}
              </Link>
            </Text>
          }
        />
        <If condition={phone} render={<Text>{phone}</Text>} />
        <If
          condition={github}
          render={
            <Text>
              <Link style={styles.link} src={github}>
                {formatLink(github)}
              </Link>
            </Text>
          }
        />
        <If
          condition={email}
          render={<Text style={styles.email}>{email}</Text>}
        />
      </View>
      <SectionRule />
    </View>
  );
}

export default Header;
