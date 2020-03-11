"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const { exec } = require("child_process");

// Sub Generators
const ADD_PAGE = "Add a Page (Universal or Vertical Search)";
const ADD_CONFIG = "Generate a new Config (config.tsx) file";

const COMMANDS = [ADD_PAGE, ADD_CONFIG];

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the Answers-React Generator`));

    const prompts = [
      {
        type: "list",
        name: "commandType",
        message: "What do you want to do?",
        choices: COMMANDS
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    switch (this.props.commandType) {
      case ADD_PAGE:
        this.composeWith(require.resolve("../addPage"));
        break;

      case ADD_CONFIG:
        this.composeWith(require.resolve("../addConfig"));
        break;
      default:
        break;
    }
  }
};
