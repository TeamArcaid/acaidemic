import express from 'express'
import questionCtrl from '../controllers/questioncontroller'

const router = express.Router()


router.route('/api/v1/questions')
    .post(questionCtrl.createAll)

export default router