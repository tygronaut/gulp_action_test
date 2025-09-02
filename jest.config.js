export default {
    transform: {}, // Ensures Jest does not apply unnecessary transformations
    testEnvironment: "node", // Ensures Jest runs in a Node.js environment
    collectCoverage: true, // Enables coverage reporting
    coverageProvider: "v8", // Uses Node's native coverage tool
    // extensionsToTreatAsEsm: [".js"], // Treats .js files as ES modules. {"type": "module"} in package json already takes care of this.

    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["/node_modules/"],

    // ✅ Explicitly define which files to track for coverage
    collectCoverageFrom: ["src/**/*.js"],

    // ✅ Helps Jest resolve files correctly
    moduleDirectories: ["node_modules", "src"],
};
