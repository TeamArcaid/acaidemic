import { response } from 'express'
import { database } from '../db.config'
const User = require('../models/user').User;

const createUser = async (req, res) => {
    User.create(
        {
            first_name:'Sojung', 
            last_name: 'Choi'
        }
    )
    .then (function(users){
        response.json(users);
    })
}

const getUsers = async (req, res) => {
    User.findAll()
    .then(function(users){
        response.json(users)
    })
}

export default {
    createUser,
    getUsers
}