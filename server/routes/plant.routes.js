import express from 'express'
import plantCtrl from '../controllers/plantcontroller'

const router = express.Router()


router.route('/api/v1/plants')
    .get(plantCtrl.readAll)
    .post(plantCtrl.createOne)
    .delete(plantCtrl.deleteAll)

router.route('/api/v1/plants/:id')
    .get(plantCtrl.readOne)
    .put(plantCtrl.updateOne)
    .delete(plantCtrl.deleteOne)


export default router