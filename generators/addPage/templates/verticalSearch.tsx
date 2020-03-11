import React from "react";
import Layout from "../components/layout";
import answersConfig from "../answersConfig/config";
import { VerticalSearchPage } from "../../answers/Answers";

const <%= pageName %> = () => {
    return (
    <Layout>
      <VerticalSearchPage config={answersConfig} verticalKey="<%= verticalKey %>" />
    </Layout>
  );
};

export default <%= pageName %>;
