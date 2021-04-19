import express from 'express'
import userCtrl from '../controllers/user.controller'

const router = express.Router()


router.route('/api/v1/users')
    .post(userCtrl.create)


export default router