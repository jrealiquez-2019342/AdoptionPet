import mongoose from "mongoose";

const petSchema = mongoose.Schema({
    keeperId:{
        type: ObjectId,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    typeOfAnimal:{
        enum:['AVE', 'ANFIBIO', 'MAMÍFERO', 'REPTIL', 'PEZ']
    },
    breed:{
        type: String,
        required: true
    }
})

export default mongoose.model('pet', petSchema);