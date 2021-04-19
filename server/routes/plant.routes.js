import express from 'express'
import plantCtrl from '../controllers/plantcontroller'

const router = express.Router()


router.route('/api/v1/plants')
    .post(plantCtrl.create)


export default router