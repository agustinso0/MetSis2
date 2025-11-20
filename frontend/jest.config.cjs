module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {
      tsconfig: {
        jsx: "react-jsx",
        allowJs: true,
        target: "es2020",
        lib: ["es2020", "dom"],
        module: "commonjs",
        moduleResolution: "node",
        types: ["jest", "@testing-library/jest-dom", "node"],
      },
    }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
