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

export default {
    createAll
}