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
          name: "verticalKey",
          message: chalk`What is the {green verticalKey} of the page you want to make?`
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
    const { verticalKey } = this.options;

    switch (this.props.pageType) {
      case UNIVERSAL_SEARCH:
        templatePath = this.templatePath("universalSearch.tsx");

        break;
      case VERTICAL_SEARCH_WITH_FACETS:
        templatePath = this.templatePath("verticalSearchWithFacets.tsx");

        break;
      case VERTICAL_SEARCH:
        templatePath = this.templatePath("verticalSearch.tsx");

        break;

      default:
        break;
    }

    const capatilize = string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const templateDate =
      pageType === UNIVERSAL_SEARCH
        ? { pageName: "UniversalSearchPage" }
        : { pageName: `${capatilize(verticalKey)}Page`, verticalKey };

    const pagePath =
      pageType === UNIVERSAL_SEARCH
        ? `src/pages/index.tsx`
        : `src/pages/${verticalKey}.tsx`;

    if (templatePath) {
      this.fs.copyTpl(templatePath, pagePath, templateDate);
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
