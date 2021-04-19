import db from '../models'
const Op = db.Sequelize.Op

const create = (req, res)=> {
    console.log("Called create plant")
    
    db.plant.create = () => {
        return db.plant.create({
            species: req.body.species,
            stage: req.body.stage,
            problem: request.body.problem,
            startMood: request.body.startMood,
            endMood: request.body.endMood,
            user_id: 1
        })
        .then((plant) => {
            console.log(">> Created plant: " + JSON.stringify(plant, null, 4));
            return plant;
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || 'Some error'
            })
        })
    }
}

export default {
    create
}