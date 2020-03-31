import React from "react";
import Layout from "../components/layout";
import answersConfig from "../answersConfig/config";
import { Layouts } from "../../answers"

const <%= pageName %> = () => {
  return (
    <Layout>
      <Layouts.VerticalSearchWithFacetsPage
        config={answersConfig}
        verticalKey="<%= verticalKey %>"
      />
    </Layout>
  );
};

export default <%= pageName %>;
