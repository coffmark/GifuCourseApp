var mongoose = require('mongoose')
const { get } = require('../routes')
var Schema = mongoose.Schema

var CourseSchema = new Schema({
    id: {type: String, required: true },
    lecture_code: {type: String, required: true },
    lecture_name: {type: String},
    lecture_season: {type: String},
    teacher_name: {type: String},
})

// virtual for course's URL
CourseSchema
.virtual('url')
.get(function (){
    return '/courses/' + this._id
})

// Export model
module.exports = mongoose.model('Course', CourseSchema)