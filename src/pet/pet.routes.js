import express from "express";
import { callPets ,updatePet, deletePet, registerPet, searchPet} from "./pet.controller.js";

const api = express.Router();

api.get('/showPets', callPets);
api.post('/registerPet', registerPet);
api.put('/updatePet/:id', updatePet);
api.delete('/deletePet/:id', deletePet);
api.get('/searchPet/:name', searchPet);

export default api;