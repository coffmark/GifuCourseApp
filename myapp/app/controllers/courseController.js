var Course = require('../models/course')
const { body, validationResult } = require('express-validator')
var async = require('async')

exports.course_list = function(req, res, next) {
    Course
        .find(function(err, courses){
            if (err) { return next(err) }
            // Success
            res.render('course_list', { title: 'Course List', course_list: courses})
        })
}