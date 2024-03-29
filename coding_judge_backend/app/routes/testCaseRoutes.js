// testcaseRoutes.js
const express = require('express');
const router = express.Router();
const {createTestCase, getAllTestCases, getTestCaseById, updateTestCaseById, deleteTestCaseById, runTestCase} = require('../controllers/testCaseControllers');
const loginCheck = require('../middleware/loginCheck')

// Routes for test cases

router.post('/create', createTestCase);
router.get('/get_all', getAllTestCases);
router.get('/get/:id', getTestCaseById);
router.put('/update/:id', updateTestCaseById);
router.delete('/delete/:id', deleteTestCaseById);
router.route('/run').post(loginCheck, runTestCase)

module.exports = router;
