const TestCase = require('../models/TestCase');
const executeUserCode = require('../services/executeUserCode');


// Controller function to create a new test case
exports.createTestCase = async (req, res) => {
  try {
    const testCase = new TestCase(req.body);
    await testCase.save();
    res.status(201).json({ success: true, testCase });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Controller function to get all test cases
exports.getAllTestCases = async (req, res) => {
  try {
    const testCases = await TestCase.find();
    res.json({ success: true, testCases });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller function to get a single test case by ID
exports.getTestCaseById = async (req, res) => {
  try {
    const testCase = await TestCase.findById(req.params.id);
    if (!testCase) {
      return res.status(404).json({ success: false, error: 'Test case not found' });
    }
    res.json({ success: true, testCase });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller function to update a test case by ID
exports.updateTestCaseById = async (req, res) => {
  try {
    const testCase = await TestCase.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!testCase) {
      return res.status(404).json({ success: false, error: 'Test case not found' });
    }
    res.json({ success: true, testCase });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Controller function to delete a test case by ID
exports.deleteTestCaseById = async (req, res) => {
  try {
    const testCase = await TestCase.findByIdAndDelete(req.params.id);
    if (!testCase) {
      return res.status(404).json({ success: false, error: 'Test case not found' });
    }
    res.json({ success: true, message: 'Test case deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



function compareArrays(str1, str2) {
  // Remove whitespace and formatting characters from both strings
  const cleanStr1 = str1.replace(/\s+/g, '');
  const cleanStr2 = str2.replace(/\s+/g, '');
  console.log(cleanStr1, "--> ", cleanStr2)
  // Compare the cleaned strings
  return cleanStr1 === cleanStr2;
}

// testcaseRunController.js

exports.runTestCase = async (req, res) => {
  try {
    // Retrieve two test cases from the database
    const testCases = await TestCase.find().limit(2); // Adjust the query as per your database setup

    // Assuming the code and language are provided in the request body
    const { code, language } = req.body;

    // Run the user code against the test cases
    const result = await executeUserCode(code, language, testCases[0]);
    const executeOutput = result.output;
    const actualOutput = testCases[0].output;

    // Check if the executeOutput is a JSON array
    let parsedExecuteOutput;
    try {
      parsedExecuteOutput = JSON.parse(executeOutput);
    } catch (error) {
      // If parsing fails, treat executeOutput as a space-separated string
      parsedExecuteOutput = executeOutput.split(/\s+/);
    }

    // Convert parsedExecuteOutput to a string with spaces
    const formattedExecuteOutput = Array.isArray(parsedExecuteOutput) ? parsedExecuteOutput.join(' ') : parsedExecuteOutput;

    console.log("Output:", formattedExecuteOutput, "Actual:", actualOutput);

    // Compare the formattedExecuteOutput with the actualOutput
    const isPassed = formattedExecuteOutput.trim() === actualOutput.trim();
    const response = {
      isPassed,
      input: testCases[0].input,
      executedOutput: formattedExecuteOutput,
      actualOutput
    };

    if (isPassed) {
      console.log("Accepted");
      return res.status(200).json({ message: "Accepted", ...response });
    } else {
      console.log("Wrong answer");
      return res.status(200).json({ message: "Wrong answer", ...response });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error executing user code", error: error.message });
  }
};


