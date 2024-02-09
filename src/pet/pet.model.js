import mongoose from "mongoose";
const {Schema} = mongoose;

const petSchema = mongoose.Schema({
    keeperId:{
        type: Schema.Types.ObjectId,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    typeOfAnimal:{
        type: String,
        uppercase: true,
        enum:['AVE', 'ANFIBIO', 'MAMÍFERO', 'REPTIL', 'PEZ'],
        required: true
    },
    breed:{
        type: String,
        required: true
    }
})

export default mongoose.model('pet', petSchema);