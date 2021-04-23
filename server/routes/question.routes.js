import express from 'express'
import questionCtrl from '../controllers/questioncontroller'

const router = express.Router()


router.route('/api/v1/questions')
    .post(questionCtrl.createAll)

router.route('/api/v1/users/:user_id/questions/:question_id')
    .post(questionCtrl.createPlantQuestion)

export default router