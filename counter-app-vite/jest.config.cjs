/** //TODO: jsdom, */
module.exports={
    testEnvironment: 'jest-environment-jsdom',    
    setupFiles: ['./jest.setup.js']
}
     
/**
 * setupFiles: ['./jest.setup.cjs']
    modulePathIgnorePatterns: ['<rootDir>/build/'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
 */


/** @type {import('jest').Config} 
const config = {
    verbose: true,
    testEnvironment: 'jest-environment-jsdom',
    
    setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  };
  
  module.exports = config; 
  */