import { request } from 'express'
import db from '../models'
const Op = db.Sequelize.Op


const createOne = (req, res)=> {
    const plant = {
        species: req.body.species,
        stage: req.body.stage,
        problem: req.body.problem,
        startMood: req.body.startMood,
        endMood: req.body.endMood,
        userId: "1"
    }
    
    db.plant.create(plant)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error'
            })
        })
}

const readOne = (req, res)=> {
    const id = req.params.id
    db.plant.findByPk(id)
    .then(data=> {
        res.send(data)
    })
    .catch(err=> {
        res.status(500).send({
            message: 'Error retrieving Plant with id=' + id
        })
    })
}

const readAll = (req, res)=> {
    db.plant.findAll()
    .then(plants=> {
        res.json(plants)
    })
}


const updateOne = (req, res)=> {
    const id = req.params.id

    db.plant.update(req.body, {
        where: { id: id }
    })
    .then(num=> {
        if(num ==1){
            res.send({
                message: 'Plant updated'
            })
        } else {
            res.send({
                message: `Cannot update Plant with id=${id}`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Error updating Plant with id=' + id
        })
    })
}

const deleteOne = (req, res)=> {
    const id = req.params.id
    db.plant.destroy({
        where: {id: id }
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: 'Plant successfully deleted'
            })
        } else {
            res.send({
                message: `Cannot delete Plant with id=${id}.`
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: 'Could not delete Plant with id=' + id
        })
    })
}

const deleteAll = (req, res)=> {
    db.plant.destroy({
        where: {},
        truncate: false
    })
    .then(nums=> {
        res.send({message: `${nums} Plants deleted` })
    })
    .catch(err => {
        res.status(500).send({
            message: 
            err.message || 'Some error'
        })
    })
}




export default {
    createOne,
    readOne,
    readAll,
    updateOne,
    deleteOne,
    deleteAll
}