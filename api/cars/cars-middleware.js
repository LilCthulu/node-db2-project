const Cars = require('./cars-model')

async function checkCarId(req, res, next) {
  try{ 
    const car = await Cars.getAll
  }
  catch {

  }
}

async function checkCarPayload(req, res, next) {
  // DO YOUR MAGIC
}

async function checkVinNumberValid(req, res, next) {
  // DO YOUR MAGIC
}

async function checkVinNumberUnique(req, res, next) {
  // DO YOUR MAGIC
}
