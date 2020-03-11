import React from "react";
import Layout from "../components/layout";
import answersConfig from "../answersConfig/config";
import VerticalSearchWithFacets from "../../answers/pageComponents/VerticalSearchWithFacetsPage";

const <%= pageName %> = () => {
  return (
    <Layout>
      <VerticalSearchWithFacets config={answersConfig} verticalKey="<%= verticalKey %>" />
    </Layout>
  );
};

export default <%= pageName %>;
