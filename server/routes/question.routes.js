import express from 'express';
import questionCtrl from '../controllers/questioncontroller';

const router = express.Router();

router.route('/api/v1/questions').post(questionCtrl.createAll);

router.route('/api/v1/plants/:plant_id/questions/:question_id').post(questionCtrl.addQuestion);

router.route('/api/v1/plants/:plant_id/questions/:question_id/responses').post(questionCtrl.addResponse);

export default router;
