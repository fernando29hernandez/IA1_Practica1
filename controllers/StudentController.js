var mongoose = require("mongoose");
var Student = require('../models/student');
var studentController = {};

studentController.index = function (req, res) {
  res.render("../views/students/index");
};
studentController.list = function (req, res) {
  console.log("El grupo a consultar es "+req.body.no_group)
  Student.find({ no_group: req.body.no_group }).exec(function (
    err,
    students
  ) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("../views/students/list", { students: students,grupo:req.body.no_group });
    }
  });
};
studentController.show = function (req, res) {
  Student.findOne({
    carne: req.body.carne,
    year: req.body.year,
    semester: req.body.semester
  }).exec(function (err, student) {
    if (err) {
      console.log("Error:", err);
    } else {
      console.log(student);
      res.render("../views/students/show", { student: student });
    }
  });
};

studentController.create = function (req, res) {
  res.render("../views/students/create");
};

studentController.save = function (req, res) {
  var student = new Student(req.body);

  student.save(function (err) {
    if (err) {
      console.log(err);
      res.render("../views/students/create");
    } else {
      console.log("Successfully created an student.");
      res.redirect("/students/");
    }
  });
};

studentController.edit = function (req, res) {
  Student.findOne({ _id: req.params.id }).exec(function (err, student) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("../views/students/edit", { student: student });
    }
  });
};
studentController.update = function (req, res) {
  Student.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        carne: req.body.carne,
        dpi: req.body.dpi,
        email: req.body.email,
        semester: req.body.semester,
        year: req.body.year,
        no_group: req.body.no_group,
      },
    },
    { new: true },
    function (err, student) {
      if (err) {
        console.log(err);
        res.render("../views/students/edit", { student: req.body });
      }
      res.redirect("/students/");
    }
  );
};
studentController.delete = function(req, res) {
  Student.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Student deleted!");
      res.redirect("/students");
    }
  });
};
module.exports = studentController;
