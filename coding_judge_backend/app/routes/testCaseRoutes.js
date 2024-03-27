// testcaseRoutes.js

const express = require('express');
const router = express.Router();
const testCaseController = require('../controllers/testCaseControllers');

// Routes for test cases
router.post('/create', testCaseController.createTestCase);
router.get('/get_all', testCaseController.getAllTestCases);
router.get('/get/:id', testCaseController.getTestCaseById);
router.put('/update/:id', testCaseController.updateTestCaseById);
router.delete('/delete/:id', testCaseController.deleteTestCaseById);

// Route for running test cases
router.post('/run', testCaseController.runTestCase);

module.exports = router;
