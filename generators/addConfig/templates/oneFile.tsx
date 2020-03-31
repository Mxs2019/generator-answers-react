import React from "react";
import { Types } from "../../answers"
import * as Icons from "react-icons/fa"

const config: Types.Config = {
  businessID: "<%= businessID %>",
  apiKey: "<%= apiKey %>",
  experienceKey: "<%= experienceKey %>",
  version: "STAGING",
  verticals: {<% verticals.map((v)=>{%>
    <%= v %>: {
      title: "<%= v %>",
      icon: Icons.FaCircle,
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
        "Search for <% verticals.map((v)=>{%><%= v %>, <%}) %>and more..."
    }
  },
  conversionTracking: true
};

export default config;
