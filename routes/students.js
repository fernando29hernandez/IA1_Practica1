var express = require('express');
var router = express.Router();
var student = require("../controllers/StudentController.js");


router.get('/', student.index);
// Get all students
router.post('/list', student.list);

// Get single student by id
router.post('/show', student.show);

// Create student
router.get('/create', student.create);

// Save student
router.post('/save', student.save);

// Edit student
router.get('/edit/:id', student.edit);

// Edit update
router.post('/update/:id', student.update);

router.delete('/remove/:id', student.delete);
module.exports = router;