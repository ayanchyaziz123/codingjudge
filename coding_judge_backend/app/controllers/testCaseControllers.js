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


// testcaseRunController.js

exports.runTestCase = async (req, res) => {
  try {
    // Retrieve two test cases from the database
    const testCases = await TestCase.find().limit(2); // Adjust the query as per your database setup

    // Assuming the code and language are provided in the request body
    const { code, language } = req.body;

    // Run the user code against the test cases
    console.log("hello : ", language)
    const results = await executeUserCode(code, language, testCases);
    console.log("result: ", results)
    return

    // Send the results back to the client
    res.status(200).json({ success: true, results });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

