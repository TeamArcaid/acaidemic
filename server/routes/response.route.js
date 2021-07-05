import express from 'express';
import responseCtlr from '../controllers/responsecontroller';

const router = express.Router();

router.route('/api/v1/response').put(responseCtlr.addQuestion);

export default router;
