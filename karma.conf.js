// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular/cli"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-mocha-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular/cli/plugins/karma")
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [{ pattern: "./src/test.ts", watched: false }],
    preprocessors: {
      "./src/test.ts": ["@angular/cli"]
    },
    mime: {
      "text/x-typescript": ["ts", "tsx"]
    },
    coverageIstanbulReporter: {
      reports: ["html", "lcovonly", "json", "cobertura", "text-summary"],
      dir: "./coverage/",
      fixWebpackSourcePaths: true,
      "report-config": {
        html: {
          subdir: "html"
        },
        cobertura: {
          file: "cobertura.xml"
        },
        json: {
          file: "coverage.json"
        }
      }
    },
    angularCli: {
      environment: "dev"
    },
    reporters:
      config.angularCli && config.angularCli.codeCoverage
        ? ["mocha", "coverage-istanbul"]
        : ["mocha", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    customLaunchers: {
      ChromeHeadless: {
        base: "Chrome",
        flags: [
          "--headless",
          "--disable-gpu",
          "--no-sandbox", // required to run without privileges in docker
          "--remote-debugging-port=9222" // Without a remote debugging port, Google Chrome exits immediately.
        ]
      }
    },
    singleRun: false,
    browserNoActivityTimeout: 120000,
    browserDisconnectTolerance: 5,
  });
};
