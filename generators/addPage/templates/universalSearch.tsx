import React from "react";
import Layout from "../components/layout";
import config from "../answersConfig/config";
import { Layouts } from "../../answers"

const <%= pageName %> = () => {
  return (
    <Layout>
      <Layouts.UniversalSearchPage config={config} />
    </Layout>
  );
};

export default <%= pageName %>;
