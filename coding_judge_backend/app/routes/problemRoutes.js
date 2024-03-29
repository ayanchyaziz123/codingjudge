const express = require('express');
const router = express.Router();
const problemController = require('../controllers/problemControllers');


// Routes for problems
router.post('/create', problemController.createProblem);
router.get('/get_all', problemController.getAllProblems);
router.get('/get/:id', problemController.getProblemById);
router.put('/update/:id', problemController.updateProblemById);
router.delete('/delete/:id', problemController.deleteProblemById);

module.exports = router;
