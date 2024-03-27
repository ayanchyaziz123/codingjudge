const util = require('util');
const { exec, spawn } = require('child_process');
const fs = require('fs');
const execAsync = util.promisify(exec);
// Run a Python script and return output
function main(scriptPath, args, input) {
  return new Promise((resolve, reject) => {
    // Use child_process.spawn method from 
    // child_process module and assign it to variable
    const pyProg = spawn('python', [scriptPath].concat(args));

    // Provide input to the Python script, if any
    if (input) {
      pyProg.stdin.write(input);
      pyProg.stdin.end();
    }

    // Collect data from script
    let data = '';
    pyProg.stdout.on('data', (stdout) => {
      data += stdout.toString();
    });

    // Handle errors
    pyProg.stderr.on('data', (stderr) => {
      reject(`stderr: ${stderr}`);
    });

    // When script execution is complete
    pyProg.on('close', (code) => {
      if (code !== 0) {
        reject(`child process exited with code ${code}`);
      } else {
        resolve(data); // Resolve with collected data
      }
    });
  });
}

// Promisify the exec function


// Function to run Python code asynchronously
// async function runPythonCode(code, input) {
//     const tempFilePath = 'temp.py';
//     fs.writeFileSync(tempFilePath, code);

//     // Prepare input string
//     const inputString = input.trim(); // Remove leading/trailing whitespace

//     // // Execute the temporary file using Python
//     // const command = `python ${tempFilePath}`;
//     // console.log(inputString); // Log input for debugging
  
//     // try {
//     //   print("Python Script Started")

//     //     const { stdout, stderr } = await execAsync(command, { input: inputString });

//     //     if (stderr) {
//     //         throw new Error(stderr);
//     //     }
//     //     return stdout
//     // } catch (error) {
//     //     throw new Error(`Error executing Python code: ${error.message}`);
//     // }

//     runPythonScript(tempFilePath, ['arg1', 'arg2'], inpu)
//   .then((result) => {
//     console.log('Python script output:', result);
//   })
//   .catch((error) => {
//     console.error('Error executing Python script:', error);
//   });
// }


async function runPythonCode(code, input) {
  const tempFilePath = 'temp.py';
  fs.writeFileSync(tempFilePath, code);

  // Prepare input string
  const inputString = input.trim(); // Remove leading/trailing whitespace

  try {
      const output = await main(tempFilePath, [], inputString);
      console.log("Output : ",output)
      return output;
  } catch (error) {
      throw new Error(`Error executing Python script: ${error}`);
  }
}


const executeUserCode = async (code, language, testCasesInput) => {
    let results = [];
    try {
        switch (language) {
            case 'python':
                for (let testCase of testCasesInput) {
                    try {
                        const output = await runPythonCode(code, testCase.input);
                        results.push({ input: testCase.input, output });
                    } catch (error) {
                        results.push({ input: testCase.input, output: `Error: ${error.message}` });
                    }
                }
                break;
            default:
                throw new Error(`Language ${language} is not supported.`);
        }
        return results;
    } catch (error) {
        throw new Error(`Error executing user code: ${error.message}`);
    }
};

module.exports = executeUserCode;
