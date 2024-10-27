const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "manager", "user"]  // manager = CR , user = student, teacher = admin
    }
}, 
{
    timestamps: true,
}
);

module.exports = mongoose.model("User", userSchema);