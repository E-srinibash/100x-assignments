const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://srinibashella66:DowzvzCgUvssJPfL@cluster0.rp8ypae.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses:[{
        type: mongoose.Schema.types.ObojectId,
        ref: "Course"    
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
 title: String,
 description: String,
 imageLink: String,
 price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}