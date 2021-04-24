import db from '../models'
const Op = db.Sequelize.Op

const createAll = (req, res)=> {
    const questions = [
        {questionText: "How is this affecting me"},
        {questionText: "What is within my control, and what is not?"},
        {questionText: "What will bring me comfort right now?"},
        {questionText: "If there is a person/s tied to the stress, how should I deal with that situation?"},
        {questionText: "What will I do to succeed?"}
    ]
    
    db.question.bulkCreate(questions)
    .then(()=> {
        return db.question.findAll()
    })
    .then(questions => {
        console.log(questions)
        res.send(questions)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || 'Some error'
        })
    })
}

const addQuestion = (req, res)=> {

    return db.plant.findByPk(req.params.plant_id).then((plant)=> {
        if(!plant){
            console.log('Plant not found')
            return null
        }

        return db.question.findByPk(req.params.question_id).then((question)=> {
            if(!question){
                console.log('Question not found')
                return null
            }

            plant.addQuestion(question)
            console.log("Successfully added question")
            res.json(plant)
        })
    })
    .catch((err)=> {
        console.log(">> Error while adding Question to Plant: ", err)
    })
}

const addResponse = (req, res)=> {
    

        return db.plant.findByPk(req.params.plant_id).then((plant)=> {
            if(!plant){
                console.log('Plant not found')
                return null
            }
            return db.question.findByPk(req.params.question_id).then((question)=> {
                if(!question){
                    console.log('Question not found')
                    return null
                }
                const response = {
                    response: req.body.response, 
                    userId: "1",
                    plantId:plant.id,
                    questionId: question.id
                }

                db.response.create(response)
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || 'Some error'
                    })
                })                
            })
        })

        .catch((err)=> {
            console.log(">> Error while adding Response: ", err)
        })
}


export default {
    createAll,
    addQuestion,
    addResponse
}