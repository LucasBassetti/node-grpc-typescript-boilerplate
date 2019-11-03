module.exports = {
  cache: false,
  testEnvironment: 'node',
  setupFilesAfterEnv: ["./setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    '^.+\\.(ts|tsx)?$': 'babel-jest'
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
  ],
  moduleNameMapper: {
    "^@config(.*)": "<rootDir>/src/config$1",
    "^@database(.*)": "<rootDir>/src/database$1",
    "^@middleware(.*)": "<rootDir>/src/middleware$1",
    "^@services(.*)": "<rootDir>/src/services$1"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
  ]
};
