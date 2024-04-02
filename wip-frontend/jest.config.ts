/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import nextJest from "next/jest.js";
const createJestConfig = nextJest({
	dir: "./",
});
const config: Config = {
	clearMocks: true,
	coverageProvider: "v8",
	moduleFileExtensions: [
		"js",
		"mjs",
		"cjs",
		"jsx",
		"ts",
		"tsx",
		"json",
		"node",
	],

	moduleNameMapper: {
		"\\.(scss|sass|css)$": "identity-obj-proxy",
	},
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	testEnvironment: "jsdom",
};

export default createJestConfig(config);
