export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/config/jest/jestEmptyComponent.tsx", // заглушка для импортируемых файлов типа svg
    "@app/(.*)": "<rootDir>/src/app/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@entities/(.*)": "<rootDir>/src/entities/$1",
    "@features/(.*)": "<rootDir>/src/features/$1",
    "@shared/(.*)": "<rootDir>/src/shared/$1"
  }
};
