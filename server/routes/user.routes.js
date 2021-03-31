import express from 'express'
import userCtrl from '../controllers/user.controller'

const router = express.Router()

router.route('/api/users')
    .get(userCtrl.getUsers)
    .post(userCtrl.createUser)

export default router