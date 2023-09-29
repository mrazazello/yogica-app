export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    // process `*.tsx` files with `ts-jest`
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    // "\\.(gif|ttf|eot|png)$": "<rootDir>/config/jest/JestEmptyComponent.tsx",
    // "\\.svg$": "<rootDir>/config/jest/svgTransform.js", // заглушка для импортируемых файлов типа svg
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$":
      "jest-transform-stub",
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@entities/(.*)": "<rootDir>/src/entities/$1",
    "@features/(.*)": "<rootDir>/src/features/$1",
    "@shared/(.*)": "<rootDir>/src/shared/$1"
  }
};
