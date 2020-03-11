import React from "react";
import * as T from "../../answers/Types";
<% verticals.map((v)=>{%>import <%= v %> from "./<%= v %>"
<%}) %>

const config: T.AnswersConfig = {
  businessID: "<%= businessID %>",
  apiKey: "<%= apiKey %>",
  experienceKey: "<%= experienceKey %>",
  version: "STAGING",
  verticals: {
    <% verticals.map((v)=>{%><%= v %>,
      <%}) %>
  },
  components: {
    UniversalResults: {
      loadingComponent: <div>Loading Results...</div>,
      noResultsComponent: <div>Custom No results</div>
    },
    SearchBar: {
      placeholderText:
        "Search for locations, faq, packages, products and more..."
    }
  },
  conversionTracking: true
};

export default config;
