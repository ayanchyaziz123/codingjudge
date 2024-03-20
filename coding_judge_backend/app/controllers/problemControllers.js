const Problem = require('../models/Problem');

// Controller function to create a new problem
exports.createProblem = async (req, res) => {
  try {
    const problem = new Problem(req.body);
    await problem.save();
    res.status(201).json({ success: true, problem });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Controller function to get all problems
exports.getAllProblems = async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json({ success: true, problems });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller function to get a single problem by ID
exports.getProblemById = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) {
      return res.status(404).json({ success: false, error: 'Problem not found' });
    }
    res.json({ success: true, problem });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Controller function to update a problem by ID
exports.updateProblemById = async (req, res) => {
  try {
    const problem = await Problem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!problem) {
      return res.status(404).json({ success: false, error: 'Problem not found' });
    }
    res.json({ success: true, problem });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Controller function to delete a problem by ID
exports.deleteProblemById = async (req, res) => {
  try {
    const problem = await Problem.findByIdAndDelete(req.params.id);
    if (!problem) {
      return res.status(404).json({ success: false, error: 'Problem not found' });
    }
    res.json({ success: true, message: 'Problem deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
