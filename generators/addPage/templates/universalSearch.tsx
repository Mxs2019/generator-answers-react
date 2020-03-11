import React from "react";
import Layout from "../components/layout";
import config from "../answersConfig/config";
import { UniversalSearchPage } from "../../answers/Answers";

const <%= pageName %> = () => {
  return (
    <Layout>
      <UniversalSearchPage config={config}></UniversalSearchPage>
    </Layout>
  );
};

export default <%= pageName %>;
