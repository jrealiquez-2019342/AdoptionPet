'use strict'

import Pet from './pet.model.js'
import {checkPetUpdate} from './../utils/validator.js';

export const callPets = async(req, res)=>{
    try {
        let results = await Pet.find();
        if(!results) return res.status(400).send({message:`Empty collection.`})
        return res.send({message:`Pets list > ${results}`});
    } catch (err) {
        console.error(err);
        return res.status(500).send({message:`Error when querying pets`})
    }
}

export const registerPet = async(req, res)=>{
    try{
        let dataPet = req.body;
        let pet = new Pet(dataPet);
        await pet.save();
        return res.send({message:`${pet.name} correctly registered`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message:`Error registering user `, err: err.errors});
    }
}

export const updatePet = async(req, res)=>{
    try{
        let {id} = req.params;
        let dataPet = req.body;

        if(!checkPetUpdate(dataPet, id)) return res.status(400).send({message:`Have submitted some data that cannot be updated or missing data`})

        let updatedPet = await Pet.findOneAndUpdate(
            {_id: id},
            dataPet,
            {new:true}
        )

        if(!updatedPet) return res.status(401).send({message:`Pet not found and not updated`});
        return res.send({message:`Update pet`, updatePet});
    }catch(err){
        console.error(err);
        return res.status(500).send({message:`Error updating pet`})
    }
}

export const deletePet = async(req, res)=>{
    try {
        let {id} = req.params;
        let deleteP = await Pet.findOneAndDelete({_id:id});
        if(!deleteP) return res.status(400).send({message:`Pet not found and not deleted.`})
        return res.send({message:`Pet with name ${deleteP.name} deleted successfully.`})
    } catch (err) {
        console.error(err);
        return res.status(500).send({message:`Error deleting pet.`})
    }
}

export const searchPet = async(req, res)=>{
    try {
        let {name} = req.params;
        let searchP = await Pet.find({name})
        if(!searchP) return res.status(400).send({message:`Pet with name ${name} not found.`})
        return res.send({message:`Showing pets with the name ${name} |  ${searchP}`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message:`Error searching pet`})
    }
}