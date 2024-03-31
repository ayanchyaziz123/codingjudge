const {runPythonCode} = require('./languageHandlers/runPythonCode')

const executeUserCode = async (code, language, testCaseInput) => {
  try {
      switch (language) {
          case 'python':
              try {
                  const output = await runPythonCode(code, testCaseInput.input);
                  return { input: testCaseInput.input, output };
              } catch (error) {
                  return { input: testCaseInput.input, output: `Error: ${error.message}` };
              }
          default:
              throw new Error(`Language ${language} is not supported.`);
      }
  } catch (error) {
      throw new Error(`Error executing user code: ${error.message}`);
  }
};



module.exports = executeUserCode;
