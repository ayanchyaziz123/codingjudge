const { exec } = require('child_process');

function runPythonCode(code, input, callback) {
    // Python command to execute code and read input from stdin
    const command = `python -c "${code}"`;

    // Spawn a child process to execute the Python code
    const childProcess = exec(command, (error, stdout, stderr) => {
        if (error) {
            // If an error occurs during execution
            callback(error.message, null);
        } else {
            // If execution is successful, return the output
            callback(null, stdout);
        }
    });

    // Provide input to the Python code via stdin
    childProcess.stdin.write(input);
    childProcess.stdin.end();
}

module.exports = runPythonCode;
