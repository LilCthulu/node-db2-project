const express = require('express')
const Cars = require('./cars-model')
const {checkCarId, checkCarPayload, checkVinNumberValid, } = require('./cars-middleware')

const router = express.Router()


router.get('/', (req, res, next) => {
    Cars.getAll()
    .then((cars) => res.json(cars))
    .catch(next)
})

router.get('/:id', checkCarId, (req, res, next) => {
    res.json(req.car)
})

router.post('/',
 (req, res, next) => {
    Cars.create(req.body)
        .then((car) => res.json(car))
        .catch(next)
 })

module.exports = router
