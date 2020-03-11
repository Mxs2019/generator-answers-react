"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

const ONE_FILE =
  "One File for the entire config (best for smaller experiences)";
const FILE_PER_VERTICAL = "File per Vertical (best for big experiences)";

const STRUCTURE = [ONE_FILE, FILE_PER_VERTICAL];

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.

    const prompts = [
      {
        type: "input",
        name: "businessID",
        message: chalk`Enter: {green Business ID}`
      },
      {
        type: "input",
        name: "apiKey",
        message: chalk`Enter: {green API Key}`
      },
      {
        type: "input",
        name: "experienceKey",
        message: chalk`Enter: {green Experience Key}`
      },
      {
        type: "input",
        name: "verticalKeys",
        message: chalk`Enter: {green Vertical Keys} (e.g. locations, doctors, events)`
      },
      {
        type: "list",
        name: "structure",
        message: "How do you want to structure the config file?",
        choices: STRUCTURE
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const {
      structure,
      verticalKeys,
      businessID,
      apiKey,
      experienceKey
    } = this.props;
    const verticals = verticalKeys.split(", ");
    switch (structure) {
      case ONE_FILE:
        this.fs.copyTpl(
          this.templatePath("oneFile.tsx"),
          `src/answersConfig/config.tsx`,
          { verticals, businessID, apiKey, experienceKey }
        );
        break;
      case FILE_PER_VERTICAL:
        this.fs.copyTpl(
          this.templatePath("multiFile.tsx"),
          `src/answersConfig/config.tsx`,
          { verticals, businessID, apiKey, experienceKey }
        );

        verticals.forEach(v => {
          this.fs.copyTpl(
            this.templatePath("verticalConfig.tsx"),
            `src/answersConfig/${v}.tsx`,
            { verticalKey: v }
          );
        });
        break;

      default:
        break;
    }
  }

  finish() {
    this.log("Added Config!");
  }
};
