import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  collectCoverageFrom: ["src/**/*.ts"],
};

export default config;
