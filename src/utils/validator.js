//Validar diferentes datos
'use strict'
import { hash } from 'bcrypt'

//encriptar la contrasenia
export const encrypt = (password) => {
    try {
        return hash(password, 10)//capas de encriptacion
    } catch (err) {
        console.error(err);
        return err;
    }
}

//Validar la contrasenia

export const checkPassword = async (password, hash) => {
    try {
        return await compare(password, hash);
    } catch (err) {
        console.error(err);
        return err;
    }
}

export const checkUpdate = (data, userId) => {
    if (userId) {
        if (
            Object.entries(data).length === 0 ||
            data.password ||
            data.password == '' ||
            data.role ||
            data.role == ''
        ) return false;
        return true;
    } else {
        return false;
    }
}