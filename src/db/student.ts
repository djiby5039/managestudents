import mongoose from "mongoose"

const StudentSchema = new mongoose.Schema({
    nom: {
        type:String,
        required:true,
    },
    prenom: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    classe: {
        type:String,
        required:true,
    }
});

export const StudentModel = mongoose.model('Student', StudentSchema);