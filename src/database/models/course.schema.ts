import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    
})

const Course = mongoose.models.course || mongoose.model("course", courseSchema);

export default Course;