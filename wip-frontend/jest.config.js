module.exports = {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	moduleNameMapper: {
		"^@/definitions(.*)$": "<rootDir>/definitions$1", // Adjust if you have a different alias for definitions
		"\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mocks out CSS imports for Jest
		// Add any additional mappings here if you have more aliases
	},
	transform: {
		// Use babel-jest to transpile tests with the next/babel preset
		"^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
	},
	globals: {
		"ts-jest": {
			tsconfig: "<rootDir>/tsconfig.json", // Points to your project's tsconfig.json
		},
	},
	// If you're using TypeScript, you may want to use ts-jest for transformation
	// Remove babel-jest above and uncomment below:
	// transform: {
	//   '^.+\\.(ts|tsx)$': 'ts-jest',
	// },
};
