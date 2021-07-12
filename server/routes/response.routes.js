import express from 'express';
import responseCtlr from '../controllers/responsecontroller';

const router = express.Router();

router.route('/api/v1/user/:user_id/response').put(responseCtlr.addResponse);
router.route('/api/v1/user/:user_id/response').get(responseCtlr.getResponses);
export default router;
