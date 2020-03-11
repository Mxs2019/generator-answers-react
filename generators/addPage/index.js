"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

// Command Types
const UNIVERSAL_SEARCH = "Universal Search";
const VERTICAL_SEARCH = "Vertical Search";
const VERTICAL_SEARCH_WITH_FACETS = "Vertical Search with Facets";

const PAGE_TYPES = [
  UNIVERSAL_SEARCH,
  VERTICAL_SEARCH,
  VERTICAL_SEARCH_WITH_FACETS
];

module.exports = class extends Generator {
  getPageType() {
    // Have Yeoman greet the user.

    const prompts = [
      {
        type: "list",
        name: "pageType",
        message: "What type of page do you want to make?",
        choices: PAGE_TYPES
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  getAdditionalOptionsRequired() {
    // Have Yeoman greet the user.
    this.options = {};

    if (this.props.pageType !== "Universal Search") {
      const prompts = [
        {
          type: "input",
          name: "verticalKeysString",
          message: chalk`What is the {green verticalKey} of the page you want to make (use comma seperated list to make multiple at the same time)?`
        }
      ];

      return this.prompt(prompts).then(options => {
        // To access props later use this.props.someAnswer;
        this.options = options;
      });
    }
  }

  writing() {
    var templatePath = null;

    const { pageType } = this.props;
    const { verticalKeysString } = this.options;
    const verticalKeys = verticalKeysString.split(", ");

    const capatilize = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const createVerticalPages = (verticalKeys, templatePath) => {
      verticalKeys.forEach(verticalKey => {
        this.fs.copyTpl(templatePath, `src/pages/${verticalKey}.tsx`, {
          pageName: `${capatilize(verticalKey)}Page`,
          verticalKey
        });
      });
    };

    switch (pageType) {
      case UNIVERSAL_SEARCH:
        this.fs.copyTpl(
          this.templatePath("universalSearch.tsx"),
          "UniversalSearchPage",
          { pageName: "UniversalSearchPage" }
        );

        break;
      case VERTICAL_SEARCH_WITH_FACETS:
        templatePath = this.templatePath("verticalSearchWithFacets.tsx");
        createVerticalPages(verticalKeys, templatePath);
        break;
      case VERTICAL_SEARCH:
        templatePath = this.templatePath("verticalSearch.tsx");
        createVerticalPages(verticalKeys, templatePath);
        break;

      default:
        break;
    }
  }

  finish() {
    const { verticalKey } = this.options;
    this.log(chalk`Page created with type {green ${this.props.pageType}}`);

    if (verticalKey) {
      this.log(
        chalk`Make sure the verticalKey: {green ${verticalKey}} is on the {green /src/answersConfig/config.tsx} file.
        Specifically add it under the {green vertical} property. 
        Otherwise, the page will exist but won't show up in the navigation tabs`
      );
    }
  }
};
