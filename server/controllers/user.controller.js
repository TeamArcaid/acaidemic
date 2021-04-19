import db from '../models'
const Op = db.Sequelize.Op
import User from '../models/user'

const create = (req, res)=> {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }

    User.create(user)
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

export default {
    create
}