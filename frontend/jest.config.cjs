module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {
      tsconfig: {
        jsx: "react-jsx",
        allowJs: true,
        target: "es2020",
        lib: ["es2020", "dom"],
        module: "esnext",
        moduleResolution: "node",
        types: ["jest", "@testing-library/jest-dom", "node"],
        typeRoots: ["./node_modules/@types", "./jest.d.ts"],
      },
    }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
