import React from "react";
import * as T from "../../answers/Types";
import * as Icons from "react-icons/fa"

const config: T.AnswersConfig = {
  businessID: "<%= businessID %>",
  apiKey: "<%= apiKey %>",
  experienceKey: "<%= experienceKey %>",
  version: "STAGING",
  verticals: {<% verticals.map((v)=>{%>
    <%= v %>: {
        title: "<%= v %>",
        icon: Icons.FaCircle
        card: {
            mapping: {}
        }
    },<%}) %>
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
