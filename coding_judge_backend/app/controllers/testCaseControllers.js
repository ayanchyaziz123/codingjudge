const TestCase = require('../models/TestCase');


const identifyInputType = (input) => {
  // Check if the input is a number
  if (!isNaN(parseFloat(input)) && isFinite(input)) {
    return parseFloat(input);
  }

  // Check if the input is an array (1D or 2D)
  try {
    const array = JSON.parse(input);
    if (Array.isArray(array)) {
      if (Array.isArray(array[0])) {
        // Convert string representation of numbers in the array to actual numbers
        return array.map(row => row.map(val => !isNaN(parseFloat(val)) ? parseFloat(val) : val));
      } else {
        // Convert string representation of numbers in the array to actual numbers
        return array.map(val => !isNaN(parseFloat(val)) ? parseFloat(val) : val);
      }
    }
  } catch (error) {
    // If parsing fails, it's likely not an array
  }

  // Check if the input is a string
  if (typeof input === 'string') {
    return input;
  }

  // Default case if none of the above conditions are met
  return 'unknown';
};




// Function to parse output string into the desired format
const parseOutput = (output) => {
  // Try parsing the output as a number
  const parsedOutput = parseFloat(output);

  // If parsing succeeds, return the number
  if (!isNaN(parsedOutput)) {
    return parsedOutput;
  }

  // Otherwise, return the output as a string
  return output;
};

// Controller function to create a new test case
exports.createTestCase = async (req, res) => {
  try {
    const testCase = new TestCase(req.body);
    const input = identifyInputType(testCase.input)
    console.log(input)
    return
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
